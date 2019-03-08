const envMode = process.env.NODE_ENV

const images = {
  test: /\.(png|svg|jpe?g|gif|webp)$/,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit: 8192, // 8Kb
        fallback: 'file-loader',
        name: '[name].[ext]',
        outputPath: 'img/',
      },
    },
    {
      loader: 'image-webpack-loader',
      options: {
        // Enables only in production build
        disable: envMode === 'production',
        mozjpeg: {
          progressive: true,
          quality: 85,
        },
        optipng: {
          enabled: false,
        },
        pngquant: {
          quality: '85',
          speed: 4,
        },
        gifsicle: {
          interlaced: false,
        },
        webp: {
          quality: 85,
        },
      },
    },
  ],
}

// eslint-disable-next-line import/prefer-default-export
export { images }
