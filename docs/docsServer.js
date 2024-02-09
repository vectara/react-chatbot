const esbuild = require("esbuild");
const chokidar = require("chokidar");
const liveServer = require("live-server");
const { config: devScriptBuildConfig } = require("./buildConfigs");

(async () => {
  // Builder for the development page
  const devPageBuilder = await esbuild.context(devScriptBuildConfig);

  chokidar
    // Watch for changes to dev env code or react-search src
    .watch(["docs/src/*.{ts,tsx,scss}", "docs/src/**/*.{ts,tsx,scss}", "src/**/*.{ts,tsx,scss}"], {
      interval: 0 // No delay
    })
    .on("all", () => {
      devPageBuilder.rebuild();
    });

  // `liveServer` local server for hot reload.
  liveServer.start({
    open: true,
    port: +process.env.PORT || 8080,
    root: "docs/public"
  });
})();
