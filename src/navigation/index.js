import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Menu } from './Menu';
import { CustomFilter, Table, Chart } from '../components';
import { ROUTE_TABLE, ROUTE_CHART } from './constants';
import { calculateTimeSeries } from '../utils';
import createBackendServer from '../api';

const api = createBackendServer();

export const Navigation = () => {
    const [conesData, setConesData] = useState(null);
    const [timeSeries, setTimeSeries] = useState([]);
    const [riskLevelArr, setRiskLevelArr] = useState(null);
    const [customFilters, setCustomFilters] = useState({
        riskLevel: 3,
        initialSum: 10000,
        years: 10,
        monthlySum: 200,
        fee: 0.01
    });

    useEffect(() => {
        api.fetchCones()
            .then((res) => {
                setConesData(res?.data)
            })
            .catch((e) => {
                console.log('Navigation getConesData() error:', e)
            });
    }, []);

    useEffect(() => {
        if (conesData?.length) {
            const cone = conesData?.filter((obj) => obj?.riskLevel === customFilters?.riskLevel)[0];
            const riskLevelArr = conesData?.map((obj) => obj?.riskLevel);
            const sortedRiskLevelArr = riskLevelArr.sort((a, b) => a - b);
            const { mu, sigma } = cone;
            const { initialSum, years, monthlySum, fee } = customFilters;

            setRiskLevelArr(sortedRiskLevelArr);
            setTimeSeries(
                calculateTimeSeries({
                    mu,
                    sigma,
                    years,
                    initialSum,
                    monthlySum,
                    fee
                })
            );
        }
    }, [conesData, customFilters]);

    return (
        <>
            <BrowserRouter>
                <Menu />
                <CustomFilter
                    riskLevelArr={riskLevelArr}
                    customFilters={customFilters}
                    onChangeCustomFilters={customFilters => setCustomFilters(customFilters)}
                />
                <Route exact path='/' component={() => <Table timeSeries={timeSeries} />} />
                <Route path={ROUTE_TABLE} component={() => <Table timeSeries={timeSeries} />} />
                <Route path={ROUTE_CHART} component={() => <Chart timeSeries={timeSeries} />} />
            </BrowserRouter>
        </>
    );
};