import fs from 'fs';
import path from 'path';
describe('Build Verification', () => {
  const buildDir = path.join(process.cwd(), '.next');
  const staticCssDir = path.join(buildDir, 'static', 'css');

  it('should have a CSS file in the build output', () => {
    // Check if the static/css directory exists
    expect(fs.existsSync(staticCssDir)).toBe(true);

    // Get all CSS files in the directory
    const cssFiles = fs
      .readdirSync(staticCssDir)
      .filter((file) => file.endsWith('.css'));
    expect(cssFiles.length).toBeGreaterThan(0);
  });

  it('should contain Tailwind CSS in the build output', () => {
    // Get the first CSS file (there should only be one)
    const cssFiles = fs
      .readdirSync(staticCssDir)
      .filter((file) => file.endsWith('.css'));
    const cssFile = cssFiles[0];
    const cssPath = path.join(staticCssDir, cssFile);

    // Read the CSS file
    const cssContent = fs.readFileSync(cssPath, 'utf-8');

    // Check for Tailwind-specific content
    expect(cssContent).toContain('tailwindcss');
    expect(cssContent).toContain('@layer base');
    expect(cssContent).toContain('@layer components');
    expect(cssContent).toContain('@layer utilities');

    // Check for some common Tailwind utilities
    expect(cssContent).toContain('.flex');
    expect(cssContent).toContain('.min-h-screen');
    expect(cssContent).toContain('.bg-blue-500');
    expect(cssContent).toContain('.text-white');
  });

  it('should have the correct Tailwind version', () => {
    const cssFiles = fs
      .readdirSync(staticCssDir)
      .filter((file) => file.endsWith('.css'));
    const cssPath = path.join(staticCssDir, cssFiles[0]);
    const cssContent = fs.readFileSync(cssPath, 'utf-8');

    // Extract the version from the comment
    const versionMatch = cssContent.match(/tailwindcss v(\d+\.\d+\.\d+)/);
    expect(versionMatch).toBeTruthy();
    expect(versionMatch![1]).toBe('4.1.3');
  });
});
