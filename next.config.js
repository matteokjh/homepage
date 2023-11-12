const { v4: uuidv4 } = require("uuid");

const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  swcMinify: false,
  images: {
    domains: ["cdn.jsdelivr.net"],
    unoptimized: true,
  },
  env: {
    version: uuidv4(),
  },
  i18n,
};

module.exports = nextConfig;
