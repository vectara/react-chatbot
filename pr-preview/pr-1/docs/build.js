const { build } = require("esbuild");
const { config } = require("./buildConfigs");

build(config);
