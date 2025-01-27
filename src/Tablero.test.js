import { render, screen } from '@testing-library/react';
import Tablero from './Tablero';

test('renders Card', () => {
  render(<Tablero />);
  const numeroCartas = screen.getByText(/8/i);
  expect(numeroCartas).toBeInTheDocument();
});