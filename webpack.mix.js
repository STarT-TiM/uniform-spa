const path = require('path')
const fs = require('fs-extra')
const mix = require('laravel-mix')
const webpack = require('webpack')

require('laravel-mix-versionhash')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

mix
  .js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')

  .disableNotifications()

if (mix.inProduction()) {
  mix
    // .extract() // Disabled until resolved: https://github.com/JeffreyWay/laravel-mix/issues/1889
    // .version() // Use `laravel-mix-versionhash` for the generating correct Laravel Mix manifest file.
    .versionHash()
} else {
  mix.sourceMaps()
}

mix.webpackConfig({
  plugins: [
    // new BundleAnalyzerPlugin()
    new webpack.DefinePlugin({
      'process.config': require(path.resolve(__dirname, 'resources/js/config/dev.env.js'))
    })
  ],
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      '~': path.join(__dirname, './resources/js')
    }
  },
  output: {
    chunkFilename: 'js/[chunkhash].js',
    path: mix.config.hmr ? '/' : path.resolve(__dirname, './public/')
  }
})

mix.then(() => {
  if (!mix.config.hmr) {
    process.nextTick(() => publishAseets())
  }
})

function publishAseets () {
  const publicDir = path.resolve(__dirname, './public')

  if (mix.inProduction()) {
    fs.removeSync(path.join(publicDir, ''))
  }

  fs.copySync(path.join(publicDir, '', ''), path.join(publicDir, ''))
  fs.removeSync(path.join(publicDir, ''))
}
