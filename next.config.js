/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
  '@pqina/pintura',
  '@pqina/react-pintura',
]);

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withTM({
  // For NextJS 13
  swcMinify: false,
  reactStrictMode: true,
});
