// Inside vue.config.js
module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    name: 'Kimono App',
    themeColor: '#4B0082',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'purple',

    // configure the workbox plugin
    workboxPluginMode: 'GenerateSW'
  }
}
