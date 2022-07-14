const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { DateTime } = require("luxon");
module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addPassthroughCopy("./src/_bundle");
  eleventyConfig.addPassthroughCopy("./src/assets");
  // eleventyConfig.setTemplateFormats(["jpg", "png", "webp", "md", "njk"]);
  
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(
      DateTime.DATETIME_MED_WITH_WEEKDAY
    );
  });
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
