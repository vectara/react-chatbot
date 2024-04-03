const { build } = require("esbuild");
const { component, hook } = require("./buildConfigs");

build(component);
build(hook);
