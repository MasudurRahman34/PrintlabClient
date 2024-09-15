/** @type {import('next').NextConfig} */
//import withBundleAnalyzer from "@next/bundle-analyzer";
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["printlabapi.devtaijul.com", "test.api.weareprintlab.co.uk"],
  },
};

/* // Configure bundle analyzer
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
}); */

//export default withBundleAnalyzer(nextConfig);
export default nextConfig;
