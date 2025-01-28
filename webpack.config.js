const path = require("path")

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    watch: true
}
//  resolve creates a path if it doesnt exist allows for absolute path
