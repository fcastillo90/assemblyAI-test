import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  it('renders without crashing', () => {
    render(
      <Input
        data-testid="input"
        placeholder="Your first entry input"
        aria-label="Your first entry"
      />)
    expect(screen.queryByTestId('input')).toBeTruthy()
    expect(screen.queryByTestId('input')).toHaveProperty('placeholder', 'Your first entry input')
  });
  it('renders errors correctly', () => {
    render(
      <Input
        error={true}
        placeholder="Your first entry input"
        aria-label="Your first entry"
      />)
    expect(screen.queryByText('This field is required field')).toBeTruthy()
  });
});