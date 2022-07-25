/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    disableStaticImages: true,
  },
};

const imageConfig = {
  // images: {
  //   publicPath: "/images/",
  // },
};

module.exports = withPlugins([[optimizedImages, imageConfig], nextConfig]);
