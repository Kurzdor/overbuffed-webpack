import path from 'path'
import config from './config'

const envMode = process.env.NODE_ENV

export default {
  // Fail if after first build we got any errors
  bail: true,
  mode: envMode,
  entry: [
    '@babel/polyfill',
    path.resolve(__dirname, config.constants.SCRIPTS_ENTRY_DIR),
    path.resolve(__dirname, config.constants.STYLES_DIR),
  ],
  output: {
    filename: config.constants.OUTPUT_FILE_NAME,
  },
  devServer: config.devServer,
  module: {
    rules: [].concat(config.styles),
  },
  // stats: {
  //   colors: true,
  //   reasons: false,
  // },
  plugins: config.plugins,
}
