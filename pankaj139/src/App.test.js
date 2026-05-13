import { render, screen } from '@testing-library/react';
import App from './App';

test('renders updated leadership profile content', () => {
  render(<App />);
  expect(
    screen.getByText(/Senior Engineering Manager \| Engineering Leader & Cloud Architect/i)
  ).toBeInTheDocument();
  expect(
    screen.getByText(/Recently transitioned to leading Highspot's Subscription team/i)
  ).toBeInTheDocument();
});
