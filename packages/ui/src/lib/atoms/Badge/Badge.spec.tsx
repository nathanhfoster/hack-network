import { render, screen, fireEvent } from '@testing-library/react';
import Badge from '.';

describe('Badge', () => {
  it('renders with default props', () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText('Test Badge')).toBeInTheDocument();
  });

  it('renders with different colors', () => {
    render(
      <div>
        <Badge color="default">Default</Badge>
        <Badge color="dark">Dark</Badge>
        <Badge color="red">Red</Badge>
      </div>,
    );
    expect(screen.getByText('Default')).toBeInTheDocument();
    expect(screen.getByText('Dark')).toBeInTheDocument();
    expect(screen.getByText('Red')).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    render(
      <div>
        <Badge size="xs">Extra small</Badge>
        <Badge size="sm">Small</Badge>
      </div>,
    );
    expect(screen.getByText('Extra small')).toBeInTheDocument();
    expect(screen.getByText('Small')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    render(
      <div>
        <Badge variant="default">Default</Badge>
        <Badge variant="bordered">Bordered</Badge>
        <Badge variant="pill">Pill</Badge>
      </div>,
    );
    expect(screen.getByText('Default')).toBeInTheDocument();
    expect(screen.getByText('Bordered')).toBeInTheDocument();
    expect(screen.getByText('Pill')).toBeInTheDocument();
  });

  it('renders with icon', () => {
    const icon = (
      <svg
        className="w-3.5 h-3.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
    );
    render(<Badge icon={icon}>With Icon</Badge>);
    expect(screen.getByText('With Icon')).toBeInTheDocument();
    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
  });

  it('renders as icon only', () => {
    const icon = (
      <svg
        className="w-3.5 h-3.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
    );
    render(<Badge icon={icon} iconOnly />);
    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
    expect(screen.queryByText('')).not.toBeInTheDocument();
  });

  it('handles dismiss action', () => {
    const onDismiss = jest.fn();
    render(
      <Badge dismissible onDismiss={onDismiss}>
        Dismissible Badge
      </Badge>,
    );
    const dismissButton = screen.getByRole('button');
    fireEvent.click(dismissButton);
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it('applies custom className', () => {
    render(<Badge className="custom-class">Custom Badge</Badge>);
    const badge = screen.getByText('Custom Badge');
    expect(badge.parentElement).toHaveClass('custom-class');
  });
});
