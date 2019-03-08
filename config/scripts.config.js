import { constants } from './constants.config'

const scripts = {
  test: constants.BABEL_LOADER_TEST_STRING,
  exclude: constants.BABEL_LOADER_EXCLUDE,
  use: {
    loader: 'babel-loader',
    options: {
      babelrc: false,
      configFile: false,
      compact: false,
      cacheDirectory: true,
      presets: [
        [
          '@babel/preset-env',
          {
            useBuiltIns: 'usage',
            targets: constants.BABEL_LOADER_TARGETS,
          },
        ],
      ],
      plugins: ['@babel/plugin-proposal-object-rest-spread'],
    },
  },
}

// eslint-disable-next-line import/prefer-default-export
export { scripts }
