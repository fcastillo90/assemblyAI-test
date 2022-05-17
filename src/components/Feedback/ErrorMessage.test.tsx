import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
  it('renders without crashing', () => {
    render(<ErrorMessage>This field is required field</ErrorMessage>)
    expect(screen.queryByText('This field is required field')).toBeTruthy()
  });
});