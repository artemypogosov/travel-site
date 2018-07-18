var path = require('path');

module.exports = {
  entry: "./app/assets/scripts/app.js",
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: "app-bundle.js"
  },
// for Babel
// module, query ---> are objects
//  loaders(array), presets ---> are properties
  module: { 
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        // /\.js$/  ---> regular expressions that telling webpack that only babel loader(plugin)
        // will be applied to JS files
        test: /\.js$/,
        // исключения для babel конвертации, not all files in our projects should be converted with babel
        exclude: /node_modules/
      }
    ]
  }
}

