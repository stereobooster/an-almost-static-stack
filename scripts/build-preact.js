process.env.NODE_ENV = "production";

const config = require("react-scripts-cssmodules/config/webpack.config.prod");

config.resolve.alias["react"] = "preact-compat";
config.resolve.alias["react-dom"] = "preact-compat";

require("react-scripts-cssmodules/scripts/build");
