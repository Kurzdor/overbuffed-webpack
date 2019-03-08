const eslint = {
  test: /\.js$/,
  enforce: 'pre',
  exclude: /node_modules/,
  use: [
    {
      loader: 'eslint-loader',
      options: {
        cache: true,
        emitWarning: true,
        emitError: true,
        // failOnWarning: true,
        failOnError: true,
      },
    },
  ],
}

// eslint-disable-next-line import/prefer-default-export
export { eslint }
