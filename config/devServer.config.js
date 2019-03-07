import { constants } from './constants.config'

const devServer = {
  contentBase: './dist',
  watchContentBase: true,
  port: constants.PORT,
  hot: true,
  open: true,
}

export { devServer }
