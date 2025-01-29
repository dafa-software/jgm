/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i0.wp.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "i0.wp.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "jgmservicos.com.br",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "http",
        hostname: "jgmservicos.com.br",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default config;
