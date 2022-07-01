/** @type {import('next').NextConfig} */
const nextConfig = {
  // rewrites: async () => [
  //   {source: '/api/tester', destination: '/api/meta/birth/1'},
  // ],
  async redirects() {
    return [
      {
        source: '/m/*',
        destination: 'https://c6qoiw9d4k.execute-api.us-east-1.amazonaws.com/*',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
}

module.exports = nextConfig