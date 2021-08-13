import { CustomFilter } from './';
import { render, screen } from '@testing-library/react';
import { riskLevelArr, customFilters } from '../../fixtures/testData';

describe('CustomFilter', () => {
    it('should render correctly', () => {
        render(
            <CustomFilter
                riskLevelArr={riskLevelArr}
                customFilters={customFilters}
                onChangeCustomFilters={jest.fn()}
            />
        );

        expect(screen.getByText('Risk Level:')).toBeInTheDocument();
        expect(screen.getByText('Initial Investment Sum:')).toBeInTheDocument();
        expect(screen.getByText('Years:')).toBeInTheDocument();
        expect(screen.getByText('Monthly Sum:')).toBeInTheDocument();
        expect(screen.getByText('Fee:')).toBeInTheDocument();
        expect(screen.getByTestId('risk-level')).toBeInTheDocument();
        expect(screen.getByTestId('initial-investment-sum')).toBeInTheDocument();
        expect(screen.getByTestId('years')).toBeInTheDocument();
        expect(screen.getByTestId('monthly-sum')).toBeInTheDocument();
        expect(screen.getByTestId('fee')).toBeInTheDocument();
    })
})