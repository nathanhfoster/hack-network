import { render, screen } from '@testing-library/react';
import Article from '.';
import { TYPOGRAPHY_VARIANTS } from '../../atoms/Typography/constants';

describe('Article', () => {
  it('renders with required props', () => {
    render(
      <Article
        title="Test Title"
        content="Test Content"
        variant={TYPOGRAPHY_VARIANTS.body1}
      />,
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders with optional props', () => {
    render(
      <Article
        title="Test Title"
        subtitle="Test Subtitle"
        author="Test Author"
        date="2024-04-02"
        content="Test Content"
        variant={TYPOGRAPHY_VARIANTS.body1}
      />,
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
    expect(screen.getByText('By Test Author')).toBeInTheDocument();
    expect(screen.getByText('• 2024-04-02')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders with image', () => {
    render(
      <Article
        title="Test Title"
        content="Test Content"
        imageUrl="test.jpg"
        imageAlt="Test Image"
        variant={TYPOGRAPHY_VARIANTS.body1}
      />,
    );
    const image = screen.getByAltText('Test Image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test.jpg');
  });

  it('renders with tags', () => {
    render(
      <Article
        title="Test Title"
        content="Test Content"
        tags={['Tag1', 'Tag2']}
        variant={TYPOGRAPHY_VARIANTS.body1}
      />,
    );
    expect(screen.getByText('Tag1')).toBeInTheDocument();
    expect(screen.getByText('Tag2')).toBeInTheDocument();
  });
});
