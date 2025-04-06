import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';

// Import Tailwind CSS
import 'tailwindcss/tailwind.css';

// Configure JSDOM for style computation
const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);

// Configure testing-library
configure({
  testIdAttribute: 'data-testid',
});
