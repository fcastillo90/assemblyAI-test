import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders without crashing', () => {
    render(<Button>test</Button>)
    expect(screen.queryByText('test')).toBeTruthy()
  });
});