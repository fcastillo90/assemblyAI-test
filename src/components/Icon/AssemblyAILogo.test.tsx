import { render, screen } from '@testing-library/react';
import AssemblyAILogo from './AssemblyAILogo';

describe('AssemblyAILogo', () => {
  it('renders without crashing', () => {
    render(<AssemblyAILogo data-testid="logo" />)
    expect(screen.queryByTestId('logo')).toBeTruthy()
  });
});