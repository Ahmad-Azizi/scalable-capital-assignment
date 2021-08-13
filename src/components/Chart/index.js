import React, { useRef, useEffect } from 'react';
import { Chart as ChartJs } from 'chart.js';
import PropTypes from 'prop-types';

export const Chart = ({
    timeSeries
}) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        drawChart();
    }, []);

    const drawChart = () => {
        const labels = timeSeries?.map((_, index) => index % 12 == 0 ? index / 12 : '');
        const dataMedian = [];
        const dataGood = [];
        const dataBad = [];
        timeSeries?.forEach(({ median, upper95, lower05 }) => {
            dataMedian.push(median);
            dataGood.push(upper95);
            dataBad.push(lower05);
        });
        const options = {
            responsive: false,
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Years'
                    },
                    gridLines: {
                        drawOnChartArea: false
                    },
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Valuation (EUR)'
                    }
                }]
            }
        };
        const config = {
            type: 'line',
            data: {
                datasets: [
                    {
                        data: dataGood,
                        label: 'Good performance',
                        borderColor: 'rgba(100, 255, 100, 0.2)',
                        fill: false,
                        pointRadius: 0
                    },
                    {
                        data: dataMedian,
                        label: 'Median performance',
                        borderColor: 'rgba(100, 100, 100, 0.2)',
                        fill: false,
                        pointRadius: 0
                    },
                    {
                        data: dataBad,
                        label: 'Bad performance',
                        borderColor: 'rgba(255, 100, 100, 0.2)',
                        fill: false,
                        pointRadius: 0
                    }
                ],
                labels
            },
            options
        };
        const context = canvasRef?.current?.getContext("2d");
        new ChartJs(context, config);
    };

    return (
        <>
            <canvas
                data-testid='chart-canvas'
                ref={(ref) => { canvasRef.current = ref }}
                width={600}
                height={400}
            />
        </>
    );
};

Chart.defaultProps = {
    timeSeries: []
};

Chart.propTypes = {
    timeSeries: PropTypes.array
};