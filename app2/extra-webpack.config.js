

//const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default

// module.exports = (angularWebpackConfig, options) => {
//   const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options)

//   // Feel free to modify this webpack config however you'd like to
//   return singleSpaWebpackConfig
// }


// module.exports = (angularWebpackConfig, options) => {
//   output: {
//   jsonpFunction: 'app2'
//   }
  
//   const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options)
//   return singleSpaWebpackConfig
//   }
const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (angularWebpackConfig, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(
    angularWebpackConfig,
    options
  );

  singleSpaWebpackConfig.output.library = 'app2'; // <!--- NOTICE THIS

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};