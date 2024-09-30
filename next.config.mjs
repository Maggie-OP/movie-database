/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["image.tmdb.org"],
  },
  compiler: {
    styledComponents: true,
    // styledComponents: {
    //   ssr: true,
    //   displayName: true,
    //   fileName: false,
    // },
  },
};

export default nextConfig;
