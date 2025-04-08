import { render, screen } from '@testing-library/react';
import AvatarGroup from '.';
import Avatar from '../Avatar';

describe('AvatarGroup', () => {
  const defaultImage =
    'https://flowbite.com/docs/images/people/profile-picture-5.jpg';

  it('renders avatar group with multiple avatars', () => {
    render(
      <AvatarGroup>
        <Avatar src={defaultImage} alt="User 1" />
        <Avatar src={defaultImage} alt="User 2" />
        <Avatar src={defaultImage} alt="User 3" />
      </AvatarGroup>,
    );
    expect(screen.getAllByRole('img')).toHaveLength(3);
  });

  it('renders stacked avatar group', () => {
    const { container } = render(
      <AvatarGroup stacked>
        <Avatar src={defaultImage} alt="User 1" />
        <Avatar src={defaultImage} alt="User 2" />
        <Avatar src={defaultImage} alt="User 3" />
      </AvatarGroup>,
    );
    expect(container.querySelector('.space-x-reverse')).toBeInTheDocument();
  });
});
