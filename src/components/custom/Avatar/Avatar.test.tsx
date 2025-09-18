import { render, screen } from '@testing-library/react';
import { Avatar, AvatarImage, AvatarFallback } from './index';

describe('Custom Avatar', () => {
  it('renders an avatar with fallback', () => {
    render(
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    );

    expect(screen.getByText('CN')).toBeInTheDocument();
    expect(screen.getByAltText('@shadcn')).toBeInTheDocument();
  });
});