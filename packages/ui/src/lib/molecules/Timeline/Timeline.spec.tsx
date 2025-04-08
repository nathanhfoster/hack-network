import { render, screen } from '@testing-library/react';
import Timeline from '.';
import { TYPOGRAPHY_VARIANTS } from '../../atoms/Typography/constants';

describe('Timeline', () => {
  const mockItems = [
    {
      date: '2024-01-01',
      title: 'Test Title 1',
      description: 'Test Description 1',
    },
    {
      date: '2024-02-01',
      title: 'Test Title 2',
      description: 'Test Description 2',
    },
  ];

  it('renders timeline items', () => {
    render(<Timeline data={mockItems} variant={TYPOGRAPHY_VARIANTS.body2} />);
    expect(screen.getByText('Test Title 1')).toBeInTheDocument();
    expect(screen.getByText('Test Description 1')).toBeInTheDocument();
    expect(screen.getByText('Test Title 2')).toBeInTheDocument();
    expect(screen.getByText('Test Description 2')).toBeInTheDocument();
  });

  it('renders dates', () => {
    render(<Timeline data={mockItems} variant={TYPOGRAPHY_VARIANTS.body2} />);
    expect(screen.getByText('2024-01-01')).toBeInTheDocument();
    expect(screen.getByText('2024-02-01')).toBeInTheDocument();
  });

  it('renders CTA button when provided', () => {
    const itemsWithCta = [
      {
        ...mockItems[0],
        cta: {
          label: 'Learn More',
          href: '#',
        },
      },
      mockItems[1],
    ];
    render(
      <Timeline data={itemsWithCta} variant={TYPOGRAPHY_VARIANTS.body2} />,
    );
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(
      <Timeline
        data={mockItems}
        variant={TYPOGRAPHY_VARIANTS.body2}
        className="custom-class"
      />,
    );
    const timeline = screen.getByRole('list');
    expect(timeline).toHaveClass('custom-class');
  });
});
