import { render, screen, fireEvent } from '@testing-library/react';
import Banner from '.';

describe('Banner', () => {
  it('renders with default props', () => {
    render(<Banner>Test Banner</Banner>);
    expect(screen.getByText('Test Banner')).toBeInTheDocument();
  });

  it('renders with icon', () => {
    const icon = (
      <svg
        className="w-3 h-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 19"
      >
        <path d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z" />
      </svg>
    );
    render(<Banner icon={icon}>With Icon</Banner>);
    expect(screen.getByText('With Icon')).toBeInTheDocument();
    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
  });

  it('renders with title', () => {
    render(<Banner title="Test Title">Test Content</Banner>);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders with CTA', () => {
    render(
      <Banner
        cta={{
          label: 'Learn more',
          href: 'https://example.com',
        }}
      >
        Test Content
      </Banner>,
    );
    const ctaLink = screen.getByRole('link');
    expect(ctaLink).toHaveAttribute('href', 'https://example.com');
    expect(ctaLink).toHaveTextContent('Learn more');
  });

  it('renders with secondary CTA', () => {
    render(
      <Banner
        secondaryCta={{
          label: 'Learn more',
          href: 'https://example.com',
        }}
      >
        Test Content
      </Banner>,
    );
    const secondaryCtaLink = screen.getByRole('link');
    expect(secondaryCtaLink).toHaveAttribute('href', 'https://example.com');
    expect(secondaryCtaLink).toHaveTextContent('Learn more');
  });

  it('renders with form', () => {
    const onSubmit = jest.fn();
    render(
      <Banner
        form={{
          label: 'Sign up',
          placeholder: 'Enter email',
          buttonLabel: 'Subscribe',
          onSubmit,
        }}
      >
        Test Content
      </Banner>,
    );
    expect(screen.getByLabelText('Sign up')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter email')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Subscribe' }),
    ).toBeInTheDocument();
  });

  it('handles dismiss action', () => {
    const onDismiss = jest.fn();
    render(
      <Banner dismissible onDismiss={onDismiss}>
        Test Content
      </Banner>,
    );
    const dismissButton = screen.getByRole('button', { name: 'Close banner' });
    fireEvent.click(dismissButton);
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it('applies custom className', () => {
    render(<Banner className="custom-class">Test Content</Banner>);
    const banner = screen.getByText('Test Content').parentElement;
    expect(banner).toHaveClass('custom-class');
  });

  it('renders in bottom position', () => {
    render(<Banner position="bottom">Test Content</Banner>);
    const banner = screen.getByText('Test Content').parentElement;
    expect(banner).toHaveClass('fixed bottom-0');
  });

  it('renders with different variants', () => {
    render(<Banner variant="marketing">Test Content</Banner>);
    const banner = screen.getByText('Test Content').parentElement;
    expect(banner).toHaveClass('bg-blue-50');
  });
});
