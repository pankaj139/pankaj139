/**
 * SEO Utility Functions
 * 
 * This file contains utility functions for managing SEO elements
 * such as document title, meta descriptions, and Open Graph tags.
 * 
 * Usage: Import these functions to dynamically update SEO elements
 * Expected: Provides easy-to-use functions for SEO management
 * 
 * Author: Pankaj Khandelwal
 * Created: 2024
 */

/**
 * Updates the document title
 * @param {string} title - The new title to set
 */
export const updateTitle = (title) => {
  document.title = title;
};

/**
 * Updates the meta description
 * @param {string} description - The new description to set
 */
export const updateDescription = (description) => {
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  }
};

/**
 * Updates Open Graph title
 * @param {string} title - The new Open Graph title
 */
export const updateOGTitle = (title) => {
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', title);
  }
};

/**
 * Updates Open Graph description
 * @param {string} description - The new Open Graph description
 */
export const updateOGDescription = (description) => {
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', description);
  }
};

/**
 * Updates all SEO elements at once
 * @param {Object} seoData - Object containing title, description, ogTitle, ogDescription
 */
export const updateSEO = ({ title, description, ogTitle, ogDescription }) => {
  if (title) updateTitle(title);
  if (description) updateDescription(description);
  if (ogTitle) updateOGTitle(ogTitle);
  if (ogDescription) updateOGDescription(ogDescription);
};

/**
 * Resets SEO to default portfolio values
 */
export const resetToDefaultSEO = () => {
  updateSEO({
    title: 'Pankaj Khandelwal - Engineering Manager Portfolio',
    description: 'Building & Leading High-Performing Engineering Teams with expertise in cloud solutions, DevOps, and technical leadership.',
    ogTitle: 'Pankaj Khandelwal - Engineering Manager Portfolio',
    ogDescription: 'Building & Leading High-Performing Engineering Teams with expertise in cloud solutions, DevOps, and technical leadership.'
  });
};
