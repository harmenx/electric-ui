import { render, screen } from '@testing-library/react';
import { Badge } from './index';

describe('Custom Badge', () => {
  it('renders a badge with text', () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText('Test Badge')).toBeInTheDocument();
  });
});