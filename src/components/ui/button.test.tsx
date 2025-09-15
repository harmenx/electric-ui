import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  it('renders the button with the correct text', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /Click me/i });
    expect(button).toBeInTheDocument();
  });

  it('applies the default variant classes', () => {
    render(<Button>Default</Button>);
    const button = screen.getByRole('button', { name: /Default/i });
    expect(button).toHaveClass('bg-primary text-primary-foreground');
  });

  it('applies the destructive variant classes', () => {
    render(<Button variant="destructive">Destructive</Button>);
    const button = screen.getByRole('button', { name: /Destructive/i });
    expect(button).toHaveClass('bg-destructive text-destructive-foreground');
  });

  it('renders as a child component', () => {
    render(<Button asChild><a href="#">Link</a></Button>);
    const link = screen.getByRole('link', { name: /Link/i });
    expect(link).toBeInTheDocument();
  });
});
