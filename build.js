const { build } = require("esbuild");
const { esm } = require("./buildConfigs");

build(esm);
