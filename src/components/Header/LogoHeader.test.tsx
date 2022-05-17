import { render, screen } from '@testing-library/react';
import LogoHeader from './LogoHeader';

describe('LogoHeader', () => {
  it('renders without crashing', () => {
    render(<LogoHeader />)
    expect(screen.queryByTestId('LogoHeader-logo')).toBeTruthy()
  });
});