import { constants } from './constants.config'

const devServer = {
  contentBase: './dist',
  watchContentBase: true,
  port: 0,
  hot: true,
  open: true,
}

// eslint-disable-next-line import/prefer-default-export
export { devServer }
