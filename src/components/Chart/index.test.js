import { Chart } from './';
import { render, screen, waitFor } from '@testing-library/react';
import { timeSeries } from '../../fixtures/testData';

describe('Chart', () => {
    it('should render correctly', () => {
        render(
            <Chart timeSeries={timeSeries} />
        );

        waitFor(() => expect(screen.getByTestId('chart-canvas')).toBeInTheDocument());
    })
})