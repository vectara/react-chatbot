const esbuild = require("esbuild");
const chokidar = require("chokidar");
const liveServer = require("live-server");
const { config: docsBuildConfig } = require("./buildConfigs");
const { esm: packageBuildConfig } = require("../buildConfigs");

// Point to different source/output directories since this script is executing in a subdirectory.
// Also enable sourcemaps for easy debugging in the docs page.
const normalizedPackageBuildConfig = {
  ...packageBuildConfig,
  entryPoints: ["../src/index.tsx", "../src/useChat.ts"],
  sourcemap: true,
  outdir: "../lib",
  outbase: "../src"
};

(async () => {
  // Builder for the component package
  const packageBuilder = await esbuild.context(normalizedPackageBuildConfig);

  // Builder for the development page
  const docsPageBuilder = await esbuild.context(docsBuildConfig);

  chokidar
    // Watch for changes to docs code or component source
    .watch(["src/*.{ts,tsx,scss}", "../src/**/*.{ts,tsx,scss}"], {
      interval: 0 // No delay
    })
    .on("all", async () => {
      await packageBuilder.rebuild();
      docsPageBuilder.rebuild();
    });

  // `liveServer` local server for hot reload.
  liveServer.start({
    open: true,
    port: +process.env.PORT || 8080,
    root: "public"
  });
})();
