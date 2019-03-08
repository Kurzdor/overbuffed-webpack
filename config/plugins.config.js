import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import MediaQuerySplittingPlugin from 'media-query-splitting-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import { constants } from './constants.config'
import { generateHtmlTemplates } from './html.config'

const envMode = process.env.NODE_ENV

const htmlPlugin = generateHtmlTemplates(constants.HTML_DIR)

const ProgressPlugin = new webpack.ProgressPlugin()

const CSSPlugin = new MiniCssExtractPlugin({
  filename:
    envMode === 'development'
      ? './css/[name].css'
      : './css/[name].[hash].css',
  chunkFilename:
    envMode === 'development'
      ? './css/[id].css'
      : './css/[id].[hash].css',
})

const QueriesPlugin = new MediaQuerySplittingPlugin({
  media: {
    mobileEnd: constants.QUERIES_PLUGIN_MOBILE_END,
    tabletPortraitEnd: constants.QUERIES_PLUGIN_TABLET_PORTRAIT_END,
    tabletLandscapeEnd: constants.QUERIES_PLUGIN_TABLET_LANDSCAPE_END,
  },
  splitTablet: true,
})

const HTRPlugin = new webpack.HotModuleReplacementPlugin()

const CleanPlugin = new CleanWebpackPlugin()

const plugins = [ProgressPlugin, QueriesPlugin, CSSPlugin].concat(
  htmlPlugin
)

if (envMode === 'development') {
  plugins.push(HTRPlugin)
}

if (envMode === 'production') {
  plugins.push(CleanPlugin)
}

// eslint-disable-next-line import/prefer-default-export
export { plugins }
