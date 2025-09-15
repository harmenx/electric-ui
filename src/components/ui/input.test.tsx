import { render, screen } from '@testing-library/react';
import { Input } from './input';

describe('Input', () => {
  it('renders the input', () => {
    render(<Input placeholder="Email" />);
    const input = screen.getByPlaceholderText('Email');
    expect(input).toBeInTheDocument();
  });
});
