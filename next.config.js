/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  async redirects() {
    return [
      // Top-level page moves
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/our-eye-doctor', destination: '/team', permanent: true },
      { source: '/insurance-info', destination: '/insurance', permanent: true },
      { source: '/eye-care-services', destination: '/services', permanent: true },
      { source: '/hours-location', destination: '/locations', permanent: true },
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/website-accessibility-policy', destination: '/accessibility', permanent: true },

      // Service detail pages (direct matches)
      { source: '/eye-care-services/comprehensive-eye-exams', destination: '/services/comprehensive-eye-exams', permanent: true },
      { source: '/eye-care-services/pediatric-eye-exams', destination: '/services/pediatric-eye-exams', permanent: true },
      { source: '/eye-care-services/pediatric-eye-exams/a-vision-of-back-to-school', destination: '/services/pediatric-eye-exams', permanent: true },
      { source: '/eye-care-services/management-of-ocular-diseases', destination: '/services/ocular-disease-management', permanent: true },
      { source: '/eye-care-services/lasik-refractive-surgery-co-management', destination: '/services/lasik-co-management', permanent: true },
      { source: '/eye-care-services/eye-emergencies', destination: '/services/eye-emergencies', permanent: true },

      // Location detail pages
      { source: '/hours-location/haymarket-2', destination: '/locations/haymarket', permanent: true },
      { source: '/hours-location/winchester', destination: '/locations/winchester', permanent: true },
      // Surfside office relocated into Georgetown — preserve traffic
      { source: '/hours-location/surfside-beach', destination: '/locations/georgetown', permanent: true },

      // Contact lenses → services/contact-lenses
      { source: '/contact-lenses', destination: '/services/contact-lenses', permanent: true },
      { source: '/contact-lenses/disposable-contacts', destination: '/services/contact-lenses', permanent: true },

      // Patient history forms → contact (no replacement on new site)
      { source: '/contact-us/patient-history-form', destination: '/contact', permanent: true },
      { source: '/patient-history-form', destination: '/contact', permanent: true },

      // About / practice pages
      { source: '/our-practice', destination: '/team', permanent: true },
      { source: '/our-practice/faq', destination: '/team', permanent: true },
      { source: '/our-practice/we-serve-the-following-areas', destination: '/locations', permanent: true },

      // Blog / news content (no equivalents on the new site)
      { source: '/eye-health__trashed/childrens-vision', destination: '/services/pediatric-eye-exams', permanent: true },
      { source: '/eyes-a-window-into-your-health-2023', destination: '/', permanent: true },
      { source: '/how-safe-is-it-to-rinse-your-eyes-with-tap-water-2023', destination: '/', permanent: true },
      { source: '/whats-new', destination: '/', permanent: true },
      { source: '/sitemap', destination: '/sitemap.xml', permanent: true },

      // Catch-all fallbacks for sub-pages without direct equivalents.
      // These run AFTER the specific rules above (Next.js evaluates redirects
      // in order and uses the first match).
      { source: '/eye-care-services/:slug*', destination: '/services', permanent: true },
      { source: '/insurance-info/:slug*', destination: '/insurance', permanent: true },
      { source: '/our-practice/:slug*', destination: '/team', permanent: true },
      { source: '/hours-location/:slug*', destination: '/locations', permanent: true },
      { source: '/contact-us/:slug*', destination: '/contact', permanent: true },
    ];
  },
}

module.exports = nextConfig
