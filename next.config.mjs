/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: isProd ? 'export' : 'standalone', // Use 'standalone' for development
  assetPrefix: isProd ? "/myportfolio/" : "", // Prefix assets for GitHub Pages
  basePath: isProd ? "/myportfolio" : "", // Set base path for GitHub Pages
};

export default nextConfig;