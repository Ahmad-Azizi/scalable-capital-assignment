import { Menu } from './';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('Menu', () => {
    it('should render correctly', () => {
        render(
            <BrowserRouter>
                <Menu />
            </BrowserRouter>
        );

        expect(screen.getByTestId('table-btn')).toBeInTheDocument();
        expect(screen.getByTestId('table-link')).toHaveAttribute('href', '/table');
        expect(screen.getByTestId('chart-btn')).toBeInTheDocument();
        expect(screen.getByTestId('chart-link')).toHaveAttribute('href', '/chart');
    })
})