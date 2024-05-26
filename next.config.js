/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === "production" ? "/fm-yvea-landing" : "",
};

module.exports = nextConfig;
