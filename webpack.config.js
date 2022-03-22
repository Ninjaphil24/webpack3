let mode = "development";

if(process.env.NODE_ENV === "production")mode="production";

module.exports = {
    mode: mode,
    
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },

    devtool: "source-map",
    devServer: {
        // using static instead of contentBase
        static: "./dist",
    },
};