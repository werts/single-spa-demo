const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = (angularWebpackConfig, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options);

  singleSpaWebpackConfig.plugins.push(new ManifestPlugin({
    filter: file => file.name === 'main.js'
  }));
  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig
}
