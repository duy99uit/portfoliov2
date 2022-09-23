/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "tailwindui.com",
      "images.unsplash.com",
      "api.uifaces.co",
      "duy99uit.github.io",
      "res.cloudinary.com",
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
