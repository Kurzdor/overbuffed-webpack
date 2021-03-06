import fs from 'fs'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const generateHtmlTemplates = templatesDir => {
  const htmls = fs.readdirSync(
    path.resolve(process.cwd(), templatesDir)
  )
  const templates = []

  for (let i = 0; i < htmls.length; i += 1) {
    const html = htmls[i]
    const file = html.split('.')
    const name = file[0]
    const extension = file[1]

    switch (extension) {
      case 'html':
      case 'htm':
        templates.push(
          new HtmlWebpackPlugin({
            filename: `${name}.${extension}`,
            template: path.resolve(
              process.cwd(),
              `${templatesDir}/${name}.${extension}`
            ),
            // inject: false,
          })
        )
        break

      default:
        break
    }
  }

  return templates
}

// eslint-disable-next-line import/prefer-default-export
export { generateHtmlTemplates }
