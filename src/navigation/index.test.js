import { Navigation } from './';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

describe('Navigation', () => {
    it('should render correctly', () => {
        render(
            <Navigation />
        );

        expect(screen.getByText('Table')).toBeInTheDocument();
        expect(screen.getByText('Chart')).toBeInTheDocument();
        const tableLink = screen.getByTestId('table-btn');
        const chartLink = screen.getByTestId('chart-btn');
        fireEvent.click(tableLink);
        expect(screen.getByText('Month')).toBeInTheDocument();
        expect(screen.getByText('Good')).toBeInTheDocument();
        expect(screen.getByText('Median')).toBeInTheDocument();
        expect(screen.getByText('Bad')).toBeInTheDocument();
        fireEvent.click(chartLink);
        waitFor(() => expect(screen.getByTestId('chart-canvas')).toBeInTheDocument());
    })
})