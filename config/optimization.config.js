import TerserPlugin from 'terser-webpack-plugin'

const envMode = process.env.NODE_ENV

const optimization = {
  minimize: envMode === 'production',
  minimizer: [
    new TerserPlugin({
      terserOptions: {
        parse: {
          ecma: 8,
        },
        compress: {
          ecma: 5,
          warnings: false,
          comparisons: false,
          inline: 2,
        },
        mangle: {
          safari10: true,
        },
        output: {
          ecma: 5,
          comments: false,
          ascii_only: true,
        },
      },
      parallel: true,
      cache: true,
      sourceMap: envMode === 'development',
    }),
  ],
  splitChunks: {
    cacheGroups: {
      commons: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendor',
        chunks: 'all',
      },
    },
  },
}

// eslint-disable-next-line import/prefer-default-export
export { optimization }
