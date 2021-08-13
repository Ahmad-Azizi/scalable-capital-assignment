import React from 'react';
import { Link } from "react-router-dom";

export const Menu = () => (
    <>
        <p data-testid='table-btn'>
            <Link
                data-testid='table-link'
                to="/table"
            >
                Table
            </Link>
        </p>
        <p data-testid='chart-btn'>
            <Link
                data-testid='chart-link'
                to="/chart"
            >
                Chart
            </Link>
        </p>
    </>
);