module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : '/',
  css: {
    loaderOptions: {
      scss: {
        // additionalData: `@import "~@/styles/main.scss";`
      },
    }
  }
}
