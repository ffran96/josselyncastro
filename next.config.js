/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [{ key: "CF-Connecting-IP", value: "IP del usuario" }],
      },
    ];
  },
};

module.exports = nextConfig;
