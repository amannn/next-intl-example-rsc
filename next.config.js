const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
  experimental: {appDir: true},
  headers() {
    return ['/', '/de', '/en'].map((path) => ({
      source: path,
      headers: [
        {
          // Cache for 1 second, but allow to send
          // cached responses for up to 1 week
          key: 'Cache-Control',
          value: 's-maxage=1, stale-while-revalidate=604800'
        }
      ]
    }));
  }
});
