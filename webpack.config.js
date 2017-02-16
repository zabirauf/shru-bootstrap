module.exports = {
    entry: "./src/index.tsx",
    output: {
	filename: "bundle.js",
	path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output
    devtool: "source-map",
    resolve: {
	extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
	loaders: [
	    { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
	]
    },

    externals: {
	"react": "React",
	"react-dom": "ReactDOM"
    }
};
