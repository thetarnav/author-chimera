module.exports = {
   plugins: [
      // require("postcss-uncss")({
      //    html: [
      //       './src/index.html'
      //    ],
      //    ignore: ['inject-svg', 'svg', 'path']
      // }),
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