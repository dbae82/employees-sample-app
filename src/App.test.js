import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Employees in h1 tag in DOM', () => {
  render(<App />);
  const element = screen.getByText(/Employees/i);
  expect(element).toBeInTheDocument();
});