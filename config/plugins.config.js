import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import MediaQuerySplittingPlugin from 'media-query-splitting-plugin'
import { constants } from './constants.config'
import { generateHtmlTemplates } from './html.config'

const envMode = process.env.NODE_ENV

const htmlPlugin = generateHtmlTemplates(constants.HTML_DIR)

const ProgressPlugin = new webpack.ProgressPlugin()

const CSSPlugin = new MiniCssExtractPlugin({
  filename:
    envMode === 'development' ? './css/[name].css' : './css/[name].[hash].css',
  chunkFilename:
    envMode === 'development' ? './css/[id].css' : './css/[id].[hash].css',
})

const QueriesPlugin = new MediaQuerySplittingPlugin({
  media: {
    mobileEnd: QUERIES_PLUGIN_MOBILE_END,
    tabletPortraitEnd: QUERIES_PLUGIN_TABLET_PORTRAIT_END,
    tabletLandscapeEnd: QUERIES_PLUGIN_TABLET_LANDSCAPE_END,
  },
  splitTablet: true,
})

const HTRPlugin = new webpack.HotModuleReplacementPlugin()

export const plugins = {
  htmlPlugin,
  ProgressPlugin,
  CSSPlugin,
  QueriesPlugin,
  HTRPlugin,
}
