// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.diogorusso.com',
        port: '*',
        pathname: '/**',
      },
    ],
  },
}