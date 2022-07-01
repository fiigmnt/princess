/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {source: '/api/tester', destination: '/api/meta/birth/1'},
  ],
  reactStrictMode: true,
}

module.exports = nextConfig