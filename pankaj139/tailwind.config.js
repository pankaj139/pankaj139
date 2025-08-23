/**
 * Tailwind CSS Configuration File
 * 
 * This file configures Tailwind CSS v4 for the React application.
 * Tailwind CSS is a utility-first CSS framework for rapid UI development.
 * 
 * Usage: This file is automatically read by Tailwind CSS when processing styles
 * Expected: Provides utility classes and custom configuration for the project
 * 
 * Author: Pankaj Khandelwal
 * Created: 2025
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
