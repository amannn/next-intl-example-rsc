const ms = require('ms');
const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
  experimental: {appDir: true},
  headers() {
    return ['/', '/de', '/en'].map((path) => ({
      source: path,
      headers: [
        {
          key: 'Cache-Control',
          value: [
            `s-maxage=${ms('1d') / 1000}`,
            `stale-while-revalidate=${ms('1y') / 1000}`
          ].join(', ')
        }
      ]
    }));
  }
});
