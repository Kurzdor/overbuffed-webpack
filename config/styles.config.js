import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import stylelint from 'stylelint'
import postcssPresetEnv from 'postcss-preset-env'
import postcssFlexbugsFixes from 'postcss-flexbugs-fixes'
import postcssFontDisplay from 'postcss-font-display'
import { constants } from './constants.config'

const envMode = process.env.NODE_ENV

const styles = {
  test: constants.SASS_LOADER_TEST_STRING,
  use: [
    {
      loader:
        envMode === 'development'
          ? 'style-loader'
          : MiniCssExtractPlugin.loader,
      options: envMode === 'development' ? { sourceMap: true } : {},
    },
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        importLoaders: 2,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
        plugins: () => [
          stylelint(),
          postcssFlexbugsFixes(),
          postcssFontDisplay(),
          postcssPresetEnv({
            autoprefixer: {
              flexbox: 'no-2009',
            },
            broswers: constants.POSTCSS_AUTOPREFIXER_BROWSERSLIST,
          }),
        ],
      },
    },
    {
      loader: 'sass-loader',
      options: {
        includePaths: constants.SASS_LOADER_INCLUDE_PATHS,
        sourceMap: true,
      },
    },
  ],
}

// eslint-disable-next-line import/prefer-default-export
export { styles }
