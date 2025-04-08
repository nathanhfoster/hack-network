import { render, screen, fireEvent } from '@testing-library/react';
import Accordion from '.';
import { ACCORDION_COLORS, ACCORDION_VARIANTS } from './constants';

describe('Accordion', () => {
  const mockItems = [
    {
      title: 'Test Title 1',
      content: 'Test Content 1',
    },
    {
      title: 'Test Title 2',
      content: 'Test Content 2',
    },
  ];

  it('renders accordion items', () => {
    render(<Accordion data={mockItems} />);
    expect(screen.getByText('Test Title 1')).toBeInTheDocument();
    expect(screen.getByText('Test Title 2')).toBeInTheDocument();
  });

  it('toggles content when clicking on title', () => {
    render(<Accordion data={mockItems} />);
    const firstTitle = screen.getByText('Test Title 1');
    expect(screen.queryByText('Test Content 1')).not.toBeInTheDocument();

    fireEvent.click(firstTitle);
    expect(screen.getByText('Test Content 1')).toBeInTheDocument();

    fireEvent.click(firstTitle);
    expect(screen.queryByText('Test Content 1')).not.toBeInTheDocument();
  });

  it('supports alwaysOpen mode', () => {
    render(<Accordion data={mockItems} alwaysOpen />);

    const firstTitle = screen.getByText('Test Title 1');
    const secondTitle = screen.getByText('Test Title 2');

    fireEvent.click(firstTitle);
    fireEvent.click(secondTitle);

    expect(screen.getByText('Test Content 1')).toBeInTheDocument();
    expect(screen.getByText('Test Content 2')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(
      <Accordion data={mockItems} variant={ACCORDION_VARIANTS.flush} />,
    );
    expect(screen.getByRole('button').parentElement?.parentElement).toHaveClass(
      'divide-y',
    );

    rerender(
      <Accordion data={mockItems} variant={ACCORDION_VARIANTS.bordered} />,
    );
    expect(screen.getByRole('button').parentElement?.parentElement).toHaveClass(
      'border',
    );
  });

  it('renders with different colors', () => {
    const { rerender } = render(
      <Accordion data={mockItems} color={ACCORDION_COLORS.primary} />,
    );
    expect(screen.getByRole('button')).toHaveClass('text-blue-500');

    rerender(<Accordion data={mockItems} color={ACCORDION_COLORS.success} />);
    expect(screen.getByRole('button')).toHaveClass('text-green-500');
  });

  it('renders with custom icons', () => {
    const itemsWithIcons = mockItems.map((item) => ({
      ...item,
      icon: <span data-testid="icon">Icon</span>,
    }));

    render(<Accordion data={itemsWithIcons} />);
    expect(screen.getAllByTestId('icon')).toHaveLength(2);
  });

  it('calls onToggle callback when item is clicked', () => {
    const onToggle = jest.fn();
    render(<Accordion data={mockItems} onToggle={onToggle} />);

    fireEvent.click(screen.getByText('Test Title 1'));
    expect(onToggle).toHaveBeenCalledWith(0);
  });

  it('applies custom className', () => {
    render(<Accordion data={mockItems} className="custom-class" />);
    expect(screen.getByRole('button').parentElement?.parentElement).toHaveClass(
      'custom-class',
    );
  });

  it('respects initial open state', () => {
    const itemsWithOpenState = mockItems.map((item, index) => ({
      ...item,
      isOpen: index === 0,
    }));

    render(<Accordion data={itemsWithOpenState} />);
    expect(screen.getByText('Test Content 1')).toBeInTheDocument();
    expect(screen.queryByText('Test Content 2')).not.toBeInTheDocument();
  });
});
