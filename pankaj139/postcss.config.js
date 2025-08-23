/**
 * PostCSS Configuration File
 * 
 * This file configures PostCSS to work with Tailwind CSS v3.
 * PostCSS is a tool for transforming CSS with JavaScript plugins.
 * 
 * Usage: This file is automatically read by PostCSS when processing CSS files
 * Expected: Enables Tailwind CSS processing and autoprefixer functionality
 * 
 * Author: Pankaj Khandelwal
 * Created: 2025
 * Updated: 2024 - Updated to use standard tailwindcss plugin for v3
 */

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
