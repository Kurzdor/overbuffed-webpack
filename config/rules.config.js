import { styles } from './styles.config'
import { scripts } from './scripts.config'
import { eslint } from './eslint.config'
import { images } from './images.config'
import { fonts } from './fonts.config'

const rules = [eslint, scripts, styles, images, fonts]

// eslint-disable-next-line import/prefer-default-export
export { rules }
