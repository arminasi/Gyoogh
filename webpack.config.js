const path = require("path");

module.exports = {
    devServer: {
        static: {
          directory: path.resolve(__dirname, "./src")
        },
    
        compress: true,
        port: 3010, // default 8000
      },
      mode: 'development',
    entry: path.resolve(__dirname, "./src/index.js"),
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader"
            },
						{
							exclude: "/node_modules/",
							test: /\.svg$/,
							use: ['file-loader'],
						},
						{
							exclude: "/node_modules/",
							test: /\.png$/,
							use: ['file-loader'],
						},
        ]
    },
    output: {
        filename: "bundle.js"
    },
};