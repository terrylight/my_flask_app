module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false };  // Disable filesystem
    }
    return config;
  },
  images: {
    domains: ['via.placeholder.com'],  // Add external image domain here
  },
};
