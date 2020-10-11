import * as path from "path";
import HtmlWebPackPlugin from "html-webpack-plugin";

const htmlPlugin = new HtmlWebPackPlugin({
	template: "./src/index.html",
	filename: "./index.html"
});

const scriptPath = "src/scripts";

const config = {
	mode: "development",
	entry: "./src/index.tsx",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "/"
	},
	devtool: "inline-source-map",
	devServer: {
		historyApiFallback: true
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"],
		alias: {
			App: path.resolve(__dirname, scriptPath),
			Components: path.resolve(__dirname, "src/scripts/components/"),
			Constants: path.resolve(__dirname, "src/scripts/constants/"),
			Enums: path.resolve(__dirname, "src/scripts/enums/"),
			Interfaces: path.resolve(__dirname, "src/scripts/interfaces/"),
			Mappers: path.resolve(__dirname, "src/scripts/mappers/"),
			Resources: path.resolve(__dirname, "src/scripts/resources/"),
			Services: path.resolve(__dirname, "src/scripts/services/"),
			Types: path.resolve(__dirname, "src/scripts/types/"),
			Utilities: path.resolve(__dirname, "src/scripts/utilities/"),
			Styles: path.resolve(__dirname, "src/styles/"),
		}
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: ["babel-loader", "eslint-loader"]
			},
			{
				test: /\.(css|scss)$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			}
		]
	},
	plugins: [htmlPlugin]
};

export default config;