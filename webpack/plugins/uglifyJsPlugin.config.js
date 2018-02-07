// const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  plugins: [
    //new webpack.optimize.UglifyJsPlugin(
    new UglifyJSPlugin({
      uglifyOptions: {
        ie8: false,
        ecma: 8,
        // parse: {...options},
        // mangle: {
        //   ...options,
        //   properties: {
        //     // mangle property options
        //   }
        // },
        output: {
          comments: false,
          beautify: false,
        },
        //compress: {...options},
        warnings: false
      }

      // beautify: true,
      // comments: false,
      // ecma: 6,
      // compress: {
      //   warnings: false,
      //   screw_ie8: true,
      //   conditionals: true,
      //   unused: true,
      //   comparisons: true,
      //   sequences: true,
      //   dead_code: true,
      //   evaluate: true,
      //   if_return: true,
      //   join_vars: true,
      // },
    })
  ]
};

// module.exports = {
//   plugins: [
//     new webpack.optimize.UglifyJsPlugin({
//       beautify: true,
//       comments: false,
//       ecma: 6,
//       compress: {
//         warnings: false,
//         screw_ie8: true,
//         conditionals: true,
//         unused: true,
//         comparisons: true,
//         sequences: true,
//         dead_code: true,
//         evaluate: true,
//         if_return: true,
//         join_vars: true,
//       }
//     })
//   ]
// };
