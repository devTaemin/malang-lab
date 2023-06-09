/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['s3.ap-northeast-2.amazonaws.com']
  },
};

// const withImages = require('next-images');
// module.exports = withImages();

module.exports = nextConfig;
