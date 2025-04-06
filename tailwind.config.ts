import type { Config } from 'tailwindcss';

export default {
  content: [
    './apps/**/*.{ts,tsx,js,jsx,html,mdx}',
    './packages/ui/**/*.{ts,tsx,js,jsx,html,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#111111',
        tertiary: '#222222',
        red: {
          500: '#FF0000',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
