/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // GitHub Pages serves the site from /<repo-name>; CI sets BASE_PATH.
  // Empty locally and on the future primeprompts.app domain.
  basePath: process.env.BASE_PATH ?? "",
  images: { unoptimized: true },
};

export default nextConfig;
