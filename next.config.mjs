// next.config.mjs
import next from 'next';

const { withWebpack } = next;

export default {
  webpack(config, { isServer }) {
    // Video fayllar uchun qo'shimcha qoidani qo'shish
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            outputPath: 'static/media/',
            publicPath: '/_next/static/media/',
          },
        },
      ],
    });
    
    return config;
  },
  reactStrictMode: false,
};
