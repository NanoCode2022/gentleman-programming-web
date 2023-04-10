/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false,
                      mergePaths: false,
                      convertShapeToPath: false,
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'static-cdn.jtvnw.net',
        port: '',
        pathname: '/jtv_user_pictures/**',
      }
    ]
  }
};

module.exports = nextConfig;
