import { constants } from './constants.config'
import { devServer } from './devServer.config'
import { optimization } from './optimization.config'
import { rules } from './rules.config'
import { plugins } from './plugins.config'

const config = {
  constants,
  optimization,
  devServer,
  rules,
  plugins,
}

export { constants, optimization, devServer, rules, plugins }

export default config
