import { render, screen } from '@testing-library/react';
import App from './App';

test('renders updated leadership profile content', () => {
  render(<App />);
  expect(
    screen.getByText(/Senior Engineering Manager Leading Subscription Platforms/i)
  ).toBeInTheDocument();
  expect(
    screen.getByText(/Leading Highspot's Subscription team focused on bulk pitch delivery/i)
  ).toBeInTheDocument();
});
