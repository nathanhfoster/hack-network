import { render, screen, fireEvent } from '@testing-library/react';
import BottomNavigation from '.';

describe('BottomNavigation', () => {
  const mockItems = [
    {
      label: 'Home',
      icon: <svg data-testid="home-icon" />,
      active: true,
    },
    {
      label: 'Search',
      icon: <svg data-testid="search-icon" />,
      href: '#',
    },
    {
      label: 'Settings',
      icon: <svg data-testid="settings-icon" />,
      disabled: true,
    },
    {
      label: 'Profile',
      icon: <svg data-testid="profile-icon" />,
    },
  ];

  it('renders with default props', () => {
    render(<BottomNavigation data={mockItems} />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();

    expect(screen.getByTestId('home-icon')).toBeInTheDocument();
    expect(screen.getByTestId('search-icon')).toBeInTheDocument();
    expect(screen.getByTestId('settings-icon')).toBeInTheDocument();
    expect(screen.getByTestId('profile-icon')).toBeInTheDocument();
  });

  it('renders with links', () => {
    render(<BottomNavigation data={mockItems} />);

    const searchLink = screen.getByText('Search').closest('a');
    expect(searchLink).toHaveAttribute('href', '#');
  });

  it('renders with disabled items', () => {
    render(<BottomNavigation data={mockItems} />);

    const settingsButton = screen.getByText('Settings').closest('button');
    expect(settingsButton).toBeDisabled();
  });

  it('renders with active items', () => {
    render(<BottomNavigation data={mockItems} />);

    const homeItem = screen.getByText('Home');
    expect(homeItem).toHaveClass('text-blue-600');
  });

  it('renders with custom variant', () => {
    render(<BottomNavigation data={mockItems} variant="bordered" />);

    const container = screen.getByRole('navigation');
    expect(container).toHaveClass('border-t');
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    const itemsWithClick = [
      ...mockItems,
      {
        label: 'Click Me',
        icon: <svg data-testid="click-icon" />,
        onClick: handleClick,
      },
    ];

    render(<BottomNavigation data={itemsWithClick} />);

    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom className', () => {
    render(<BottomNavigation data={mockItems} className="custom-class" />);

    const container = screen.getByRole('navigation');
    expect(container).toHaveClass('custom-class');
  });
});
