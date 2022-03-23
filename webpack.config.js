const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


let mode = "development";

if (process.env.NODE_ENV === "production") mode = "production";

module.exports = {
    mode: mode,

    output: {
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[hash][ext][query]"
    },

    module: {
        rules: [
            {
               test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset",
                // Allows you to determine size of images to be turned to inline code.  Default is 8kb
                // parser: { 
                //     dataUrlCondition: {
                //         maxSize: 30 * 1024,
                //     },
                // },
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(), new HtmlWebpackPlugin({
        template: "./src/index.html",
        }),
    ],

    resolve: {
        extensions: [".js", ".jsx"]
    },

    devtool: "source-map",
    devServer: {
        // using static instead of contentBase
        static: "./dist",
        hot: true,
    },
};