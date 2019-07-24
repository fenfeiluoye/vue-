const path = require('path')

function resolve (url) {
  return path.resolve(__dirname, url)
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('components', resolve('./src/components'))
      .set('styles', resolve('./src/assets/styles'))
      .set('views', resolve('./src/views'))
      .set('utils', resolve('./src/utils'))
      .set('assets', resolve('./src/assets'))
  },

  devServer :{
    proxy: {
      '/api' :{
         target: 'http://z.dangdang.com',
         changeOrigin: true,
         headers: {
           referer: 'http://z.dangdang.com',
           host : 'z.dangdang.com'
         },
         hostRewrite: 'z.dangdang.com'
      },

    '/h5ajax' :{
        target :'http://touch.m.dangdang.com',
        changeOrigin: true,
         headers: {
           referer: 'http://touch.m.dangdang.com',
           host : 'touch.m.dangdang.com'
         },
         hostRewrite: 'touch.m.dangdang.com'

    },
    '/search_ajax.php':{
        target :'http://search.m.dangdang.com',
        changeOrigin: true,
         headers: {
           referer: 'http://search.m.dangdang.com',
           host : 'search.m.dangdang.com'
         },
         hostRewrite: 'search.m.dangdang.com'
    },
    // '/h5ajax' :{
    //     target :'http://home.m.dangdang.com',
    //     changeOrigin: true,
    //      headers: {
    //        referer: 'http://home.m.dangdang.com',
    //        host : 'home.m.dangdang.com'
    //      },
    //      hostRewrite: 'home.m.dangdang.com'

    // },
    

    }
  }
}