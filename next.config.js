const pjson = require('./package.json')

module.exports = {
  basePath: '/test-widget-bookmarks',
  env: {
    NMXP_APP_NAME: pjson.name,
    NMXP_APP_VERSION: pjson.version
  },
  poweredByHeader: false,
  reactStrictMode: true,
  async rewrites () {
    // Map health routes to /api endpoints
    return [
      {
        source: '/health',
        destination: '/api/health'
      },
      {
        source: '/deep-health',
        destination: '/api/deep-health'
      }
    ]
  },
  experimental: {
    optimizePackageImports: [
      '@nm/flexible-ui-framework'
    ]
  },
  eslint: {
    // Allow Build to pass if project has ESLint errors. Separate Lint job handles it.
    ignoreDuringBuilds: true
  }
}
