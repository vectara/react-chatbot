const { sassPlugin } = require("esbuild-sass-plugin");
const cssPlugin = require("esbuild-css-modules-plugin");
const { dependencies, devDependencies, peerDependencies } = require("./package.json");

const sharedConfig = {
  bundle: true,
  entryPoints: ["src/index.tsx", "src/useChat.ts"],
  logLevel: "info",
  treeShaking: true,
  minify: true,
  sourcemap: true,
  external: [...Object.keys(dependencies), ...Object.keys(devDependencies), ...Object.keys(peerDependencies)],
  target: ["esnext", "node12.22.0"],
  plugins: [cssPlugin(), sassPlugin({ type: "style" })],
  outdir: "./lib",
  outbase: "./src"
};

module.exports = {
  esm: {
    ...sharedConfig,
    format: "esm"
  },
  cjs: {
    ...sharedConfig,
    format: "cjs"
  }
};
