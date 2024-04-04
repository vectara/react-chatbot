const { build } = require("esbuild");
const { esm, cjs } = require("./buildConfigs");

build(esm);
build(cjs);
