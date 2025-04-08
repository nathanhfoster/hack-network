import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Alert from '.';
import { ALERT_COLORS, ALERT_VARIANTS } from './constants';

describe('Alert', () => {
  it('renders alert with text', () => {
    render(<Alert>A simple alert</Alert>);
    expect(screen.getByText('A simple alert')).toBeInTheDocument();
  });

  it('renders alert with title', () => {
    render(<Alert title="Alert Title">Alert content</Alert>);
    expect(screen.getByText('Alert Title')).toBeInTheDocument();
    expect(screen.getByText('Alert content')).toBeInTheDocument();
  });

  it('renders with different colors', () => {
    const { rerender } = render(
      <Alert color={ALERT_COLORS.primary}>Primary alert</Alert>,
    );
    expect(screen.getByText('Primary alert')).toBeInTheDocument();

    rerender(<Alert color={ALERT_COLORS.success}>Success alert</Alert>);
    expect(screen.getByText('Success alert')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(
      <Alert variant={ALERT_VARIANTS.default}>Default alert</Alert>,
    );
    expect(screen.getByText('Default alert')).toBeInTheDocument();

    rerender(<Alert variant={ALERT_VARIANTS.bordered}>Bordered alert</Alert>);
    expect(screen.getByText('Bordered alert')).toBeInTheDocument();
  });

  it('renders dismissible alert with close button', () => {
    const onDismiss = jest.fn();
    render(
      <Alert dismissible onDismiss={onDismiss}>
        Dismissible alert
      </Alert>,
    );
    expect(screen.getByText('Dismissible alert')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls onDismiss when close button is clicked', () => {
    const onDismiss = jest.fn();
    render(
      <Alert dismissible onDismiss={onDismiss}>
        Dismissible alert
      </Alert>,
    );
    fireEvent.click(screen.getByRole('button'));
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it('renders with custom className', () => {
    render(<Alert className="custom-class">Alert with custom class</Alert>);
    expect(screen.getByRole('alert')).toHaveClass('custom-class');
  });
});
