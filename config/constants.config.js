const constants = {
  PORT: '4445',
  SCRIPTS_ENTRY_DIR: 'src/js/index.js',
  STYLES_DIR: 'src/scss/style.scss',
  OUTPUT_DIR: 'dist/',
  OUTPUT_FILE_NAME: 'js/bundle.[hash].js',
  OUTPUT_PUBLIC_PATH: 'static/',
  HTML_DIR: 'src/',
  SASS_LOADER_TEST_STRING: /\.(sa|sc|c)ss$/,
  SASS_LOADER_INCLUDE_PATHS: ['./node_modules'],
  SASS_LOADER_EXCLUDE: '',
  POSTCSS_AUTOPREFIXER_BROWSERSLIST: ['> 0.25%', 'not dead'],
  QUERIES_PLUGIN_MOBILE_END: 568,
  QUERIES_PLUGIN_TABLET_PORTRAIT_END: 768,
  QUERIES_PLUGIN_TABLET_LANDSCAPE_END: 1024,
  BABEL_LOADER_TEST_STRING: /\.js$/,
  BABEL_LOADER_EXCLUDE: /(node_modules)/,
  BABEL_LOADER_TARGETS: '> 0.25%, not dead',
}

// eslint-disable-next-line import/prefer-default-export
export { constants }
