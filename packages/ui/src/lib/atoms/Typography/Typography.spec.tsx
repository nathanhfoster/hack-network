import { render, screen } from '@testing-library/react';
import Typography from '.';

describe('Typography', () => {
  it('renders with default props', () => {
    render(<Typography>Test Text</Typography>);
    expect(screen.getByText('Test Text')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    render(
      <div>
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="body1">Body 1</Typography>
      </div>,
    );
    expect(screen.getByText('Heading 1')).toBeInTheDocument();
    expect(screen.getByText('Body 1')).toBeInTheDocument();
  });

  it('renders with custom component', () => {
    render(<Typography component="div">Custom Component</Typography>);
    const element = screen.getByText('Custom Component');
    expect(element.tagName).toBe('DIV');
  });
});
