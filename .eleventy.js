const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = (config) => {
  config.addPlugin(syntaxHighlight);
 
  config.setTemplateFormats(["jpg", "png", "webp", "md", "njk"]);
  config.setBrowserSyncConfig({
    files: ["dist/**/*"],
    open: true,
  });
  config.setDataDeepMerge(true);

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
