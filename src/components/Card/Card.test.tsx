import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders without crashing', () => {
    render(<Card>test</Card>)
    expect(screen.queryByText('test')).toBeTruthy()
  });
});