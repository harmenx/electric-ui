import { render, screen } from '@testing-library/react';
import { Button } from './index';

describe('Custom Button', () => {
  it('applies the brand variant classes', () => {
    render(<Button variant="brand">Brand Button</Button>);
    const button = screen.getByRole('button', { name: /Brand Button/i });
    expect(button).toHaveClass('bg-blue-500 text-white');
  });
});
