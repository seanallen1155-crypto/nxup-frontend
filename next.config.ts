import type { NextConfig } from "next";
import type { RuleSetRule } from "webpack";

const nextConfig: NextConfig = {
  webpack(config) {
    // Remove Next's default handling of SVGs
    const fileLoaderRule = config.module.rules.find(
      (rule) =>
        typeof rule !== "string" &&
        rule !== null &&
        (rule as RuleSetRule).test instanceof RegExp &&
        (rule as RuleSetRule).test?.test(".svg")
    ) as RuleSetRule | undefined;

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    // Add SVGR loader
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  // ✅ Cloud Run requires standalone build output
  output: "standalone",

  // ✅ Keep API URL environment variable
  env: {
    NEXT_PUBLIC_API_URL:
      process.env.NEXT_PUBLIC_API_URL ||
      "https://nxup-backend-641628834151.us-central1.run.app",
  },
};

export default nextConfig;