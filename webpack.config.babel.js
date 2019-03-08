import path from 'path'
import {
  constants,
  optimization,
  devServer,
  rules,
  plugins,
} from './config'

const envMode = process.env.NODE_ENV

export default {
  // Fail if after first build we got any errors
  bail: true,
  mode: envMode,
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, constants.SCRIPTS_ENTRY_DIR),
    path.resolve(__dirname, constants.STYLES_DIR),
  ],
  optimization,
  output: {
    filename: constants.OUTPUT_FILE_NAME,
  },
  devServer,
  module: {
    rules,
  },
  plugins,
}
