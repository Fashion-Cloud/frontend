/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['fashion-cloud.s3.ap-northeast-2.amazonaws.com'],
  },

  webpack(config) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: { removeViewBox: false },
              },
            },
          ],
        },
        titleProp: true,
      },
      test: /\.svg$/,
    });
    return config;
  },

  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `${process.env.NEXT_PUBLIC_API}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
