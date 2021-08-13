import { Table } from './';
import { render, screen } from '@testing-library/react';
import { timeSeries } from '../../fixtures/testData';

describe('Table', () => {
    it('should render correctly', () => {
        render(
            <Table timeSeries={timeSeries} />
        );

        expect(screen.getByTestId('table')).toBeInTheDocument();
        expect(screen.getByText('Month')).toBeInTheDocument();
        expect(screen.getByText('Good')).toBeInTheDocument();
        expect(screen.getByText('Median')).toBeInTheDocument();
        expect(screen.getByText('Bad')).toBeInTheDocument();
    })
})