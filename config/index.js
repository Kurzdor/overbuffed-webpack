import { constants } from './constants.config'
import { devServer } from './devServer.config'
import { styles } from './styles.config'
import { scripts } from './scripts.config'
import { eslint } from './eslint.config'
import { images } from './images.config'
import { plugins } from './plugins.config'

const config = {
  constants,
  devServer,
  styles,
  scripts,
  eslint,
  plugins,
}

export { constants, devServer, styles, plugins }

export default config
