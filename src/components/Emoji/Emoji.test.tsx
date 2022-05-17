import { render, screen } from '@testing-library/react';
import Emoji from './Emoji';

describe('Emoji', () => {
  it('renders without crashing', () => {
    render(<Emoji symbol='🎉' label="success" />)
    expect(screen.queryByText('🎉')).toBeTruthy()
  });
});