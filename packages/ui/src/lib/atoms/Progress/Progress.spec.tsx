import { render, screen } from '@testing-library/react';
import Progress from '.';
import {
  PROGRESS_COLORS,
  PROGRESS_LABEL_POSITIONS,
  PROGRESS_SIZES,
} from './constants';

describe('Progress', () => {
  it('renders with default props', () => {
    render(<Progress value={45} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveStyle({ width: '45%' });
  });

  it('renders with custom max value', () => {
    render(<Progress value={45} max={200} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveStyle({ width: '23%' });
  });

  it('renders with label outside', () => {
    render(
      <Progress
        value={45}
        label="Test Label"
        labelPosition={PROGRESS_LABEL_POSITIONS.outside}
      />,
    );
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('45%')).toBeInTheDocument();
  });

  it('renders with label inside', () => {
    render(
      <Progress value={45} labelPosition={PROGRESS_LABEL_POSITIONS.inside} />,
    );
    expect(screen.getByText('45%')).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(
      <Progress value={45} size={PROGRESS_SIZES.sm} />,
    );
    expect(screen.getByRole('progressbar')).toHaveClass('h-1.5');

    rerender(<Progress value={45} size={PROGRESS_SIZES.lg} />);
    expect(screen.getByRole('progressbar')).toHaveClass('h-4');
  });

  it('renders with different colors', () => {
    const { rerender } = render(
      <Progress value={45} color={PROGRESS_COLORS.success} />,
    );
    expect(screen.getByRole('progressbar')).toHaveClass('bg-green-600');

    rerender(<Progress value={45} color={PROGRESS_COLORS.danger} />);
    expect(screen.getByRole('progressbar')).toHaveClass('bg-red-600');
  });

  it('does not show value when showValue is false', () => {
    render(
      <Progress
        value={45}
        label="Test Label"
        labelPosition={PROGRESS_LABEL_POSITIONS.outside}
        showValue={false}
      />,
    );
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.queryByText('45%')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Progress value={45} className="custom-class" />);
    expect(screen.getByRole('progressbar').parentElement).toHaveClass(
      'custom-class',
    );
  });
});
