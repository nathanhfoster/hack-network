import { render, screen } from '@testing-library/react';
import Avatar from '.';

describe('Avatar', () => {
  const defaultImage =
    'https://flowbite.com/docs/images/people/profile-picture-5.jpg';

  it('renders avatar with image', () => {
    render(<Avatar src={defaultImage} alt="Test avatar" />);
    const img = screen.getByAltText('Test avatar');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', defaultImage);
  });

  it('renders default avatar when no image is provided', () => {
    render(<Avatar alt="Default avatar" />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('renders with custom initials', () => {
    render(
      <Avatar>
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <span className="font-medium text-gray-600 dark:text-gray-300">
            JL
          </span>
        </div>
      </Avatar>,
    );
    expect(screen.getByText('JL')).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { container } = render(
      <div>
        <Avatar size="xs" src={defaultImage} alt="Extra small" />
        <Avatar size="sm" src={defaultImage} alt="Small" />
        <Avatar size="md" src={defaultImage} alt="Medium" />
        <Avatar size="lg" src={defaultImage} alt="Large" />
        <Avatar size="xl" src={defaultImage} alt="Extra large" />
      </div>,
    );
    expect(container.querySelector('.w-6')).toBeInTheDocument();
    expect(container.querySelector('.w-8')).toBeInTheDocument();
    expect(container.querySelector('.w-10')).toBeInTheDocument();
    expect(container.querySelector('.w-20')).toBeInTheDocument();
    expect(container.querySelector('.w-36')).toBeInTheDocument();
  });

  it('renders with different shapes', () => {
    const { container } = render(
      <div>
        <Avatar shape="rounded" src={defaultImage} alt="Rounded" />
        <Avatar shape="rounded-full" src={defaultImage} alt="Rounded full" />
        <Avatar shape="rounded-sm" src={defaultImage} alt="Rounded small" />
      </div>,
    );
    expect(container.querySelector('.rounded')).toBeInTheDocument();
    expect(container.querySelector('.rounded-full')).toBeInTheDocument();
    expect(container.querySelector('.rounded-sm')).toBeInTheDocument();
  });

  it('renders with status indicator', () => {
    const { container } = render(
      <Avatar src={defaultImage} status="online" alt="Online user" />,
    );
    expect(container.querySelector('.bg-green-400')).toBeInTheDocument();
  });

  it('renders with border when bordered prop is true', () => {
    const { container } = render(
      <Avatar src={defaultImage} bordered alt="Bordered avatar" />,
    );
    expect(container.querySelector('.border-2')).toBeInTheDocument();
  });
});
