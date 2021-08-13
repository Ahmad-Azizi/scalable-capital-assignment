import React from 'react';
import PropTypes from 'prop-types';

export const Table = ({
    timeSeries
}) => (
    <table data-testid='table'>
        <thead>
            <tr>
                <th key={'month'}>Month</th>
                <th key={'good'}>Good</th>
                <th key={'median'}>Median</th>
                <th key={'bad'}>Bad</th>
            </tr>
        </thead>
        <tbody>
            {
                timeSeries?.map(({ median, upper95, lower05 }, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{upper95}</td>
                        <td>{median}</td>
                        <td>{lower05}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
);

Table.defaultProps = {
    timeSeries: []
};

Table.propTypes = {
    timeSeries: PropTypes.array
};