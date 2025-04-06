import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../index';

describe('Button Component', () => {
  it('should apply default Tailwind styles correctly', () => {
    render(<Button>Test Button</Button>);
    const button = screen.getByRole('button');
    const styles = window.getComputedStyle(button);

    // Check for default Tailwind styles
    expect(styles.backgroundColor).toBe('rgb(59, 130, 246)'); // bg-blue-500
    expect(styles.color).toBe('rgb(255, 255, 255)'); // text-white
    expect(styles.fontWeight).toBe('700'); // font-bold
    expect(styles.paddingTop).toBe('0.5rem'); // py-2
    expect(styles.paddingBottom).toBe('0.5rem'); // py-2
    expect(styles.paddingLeft).toBe('1rem'); // px-4
    expect(styles.paddingRight).toBe('1rem'); // px-4
    expect(styles.borderRadius).toBe('0.25rem'); // rounded
  });

  it('should apply hover styles correctly', () => {
    render(<Button>Test Button</Button>);
    const button = screen.getByRole('button');

    // Get initial styles
    const initialStyles = window.getComputedStyle(button);
    expect(initialStyles.backgroundColor).toBe('rgb(59, 130, 246)'); // bg-blue-500

    // Simulate hover
    fireEvent.mouseEnter(button);
    const hoverStyles = window.getComputedStyle(button);
    expect(hoverStyles.backgroundColor).toBe('rgb(29, 78, 216)'); // hover:bg-blue-700
  });

  it('should allow custom Tailwind styles to override defaults', () => {
    const customClasses = 'bg-red-500 hover:bg-red-700 text-black';
    render(<Button className={customClasses}>Custom Button</Button>);
    const button = screen.getByRole('button');
    const styles = window.getComputedStyle(button);

    // Check that custom styles are applied
    expect(styles.backgroundColor).toBe('rgb(239, 68, 68)'); // bg-red-500
    expect(styles.color).toBe('rgb(0, 0, 0)'); // text-black

    // Simulate hover
    fireEvent.mouseEnter(button);
    const hoverStyles = window.getComputedStyle(button);
    expect(hoverStyles.backgroundColor).toBe('rgb(185, 28, 28)'); // hover:bg-red-700
  });
});
