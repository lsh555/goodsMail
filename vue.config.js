module.exports ={
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
      }
    }
  },
  devServer:{
    proxy:{
      '/api':{
        target:'http://39.97.33.178',
        changeOrigin:true
      },
    }
  }
}