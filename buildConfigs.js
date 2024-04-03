const { sassPlugin } = require("esbuild-sass-plugin");
const cssPlugin = require("esbuild-css-modules-plugin");
const { dependencies, devDependencies, peerDependencies } = require("./package.json");

const sharedConfig = {
  bundle: true,
  logLevel: "info",
  treeShaking: true,
  minify: true,

  // Removing source maps theoretically shaves around 100kb of the package size.
  // Initially setting this to false and will verify the npm package size.
  sourcemap: false,
  external: [...Object.keys(dependencies), ...Object.keys(devDependencies), ...Object.keys(peerDependencies)],
  target: ["esnext", "node12.22.0"],
  // css-text outputs CSS as a string which can be embedded as a stylesheet in a web component
  // See for more info: https://github.com/glromeo/esbuild-sass-plugin?tab=readme-ov-file#type-css-text
  plugins: [cssPlugin(), sassPlugin({ type: "css-text" })],
  outdir: "./lib",
  outbase: "./src"
};

module.exports = {
  component: {
    ...sharedConfig,
    entryPoints: ["src/index.tsx"],
    format: "esm"
  },

  hook: {
    ...sharedConfig,
    entryPoints: ["src/useChat.ts"],
    format: "cjs"
  }
};
