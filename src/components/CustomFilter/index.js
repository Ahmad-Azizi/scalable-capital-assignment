import React from 'react';
import PropTypes from 'prop-types';

export const CustomFilter = ({
    riskLevelArr,
    customFilters,
    onChangeCustomFilters
}) => {
    const { initialSum, years, monthlySum, fee } = customFilters;
    const options = [];

    riskLevelArr?.map(riskLevel =>
        options.push(
            <option key={riskLevel} value={riskLevel}>{riskLevel}</option>
        )
    );

    const onChange = (key, value) =>
        onChangeCustomFilters({
            ...customFilters,
            [key]: value
        });

    return (
        <>
            <div>
                Risk Level:
                <select
                    data-testid='risk-level'
                    onChange={({ target: { value } }) => onChange('riskLevel', Number(value))}
                >
                    {options}
                </select>
            </div>
            <div>
                Initial Investment Sum:
                <input
                    data-testid='initial-investment-sum'
                    value={initialSum}
                    onChange={({ target: { value } }) => onChange('initialSum', Number(value))}
                    type='number'
                />
            </div>
            <div>
                Years:
                <input
                    data-testid='years'
                    value={years}
                    onChange={({ target: { value } }) => onChange('years', Number(value))}
                    type='number'
                />
            </div>
            <div>
                Monthly Sum:
                <input
                    data-testid='monthly-sum'
                    value={monthlySum}
                    onChange={({ target: { value } }) => onChange('monthlySum', Number(value))}
                    type='number'
                />
            </div>
            <div>
                Fee:
                <input
                    data-testid='fee'
                    value={fee}
                    onChange={({ target: { value } }) => onChange('fee', Number(value).toFixed(2))}
                    type='number'
                />
            </div>
        </>
    );
}

CustomFilter.defaultProps = {
    riskLevelArr: []
};

CustomFilter.propTypes = {
    riskLevelArr: PropTypes.array,
    customFilters: PropTypes.object.isRequired,
    onChangeCustomFilters: PropTypes.func.isRequired
};