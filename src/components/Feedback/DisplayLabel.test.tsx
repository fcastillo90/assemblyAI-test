import { render, screen } from '@testing-library/react';
import DisplayLabel from './DisplayLabel';

describe('DisplayLabel', () => {
  it('renders without crashing', () => {
    render(<DisplayLabel>This field is required field</DisplayLabel>)
    expect(screen.queryByText('This field is required field')).toBeTruthy()
  });
});