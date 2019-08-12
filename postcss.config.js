module.exports = {
   plugins: [
      require("postcss-uncss")({
         html: [
            './src/index.html'
         ]
      }),
      require('autoprefixer')({
         overrideBrowserslist: [
            ">1%",
            'last 4 versions',
            "Firefox ESR",
            "not ie < 10",
            'iOS >= 8'
         ]
      }),
   ],
};