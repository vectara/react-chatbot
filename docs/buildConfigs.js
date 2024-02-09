const { sassPlugin } = require("esbuild-sass-plugin");
const cssPlugin = require("esbuild-css-modules-plugin");

module.exports = {
  config: {
    bundle: true,
    define: {
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development")
    },
    entryPoints: ["docs/src/index.tsx"],
    outfile: "docs/public/script.js",
    sourcemap: true,
    plugins: [cssPlugin(), sassPlugin({ type: "style" })]
  }
};
