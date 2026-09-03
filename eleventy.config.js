module.exports = function(eleventyConfig) {
  // Copy assets and static files
  eleventyConfig.addPassthroughCopy({ "assets": "assets" });
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/public");
  eleventyConfig.addPassthroughCopy("src/*.css");
  eleventyConfig.addPassthroughCopy("src/*.js");
  eleventyConfig.addPassthroughCopy("src/*.xml");
  eleventyConfig.addPassthroughCopy("src/*.txt");
  eleventyConfig.addPassthroughCopy("src/*.webmanifest");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  // Disable automatic ignoring of certain things if needed, but defaults are fine

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts"
    },
    templateFormats: ["html", "njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
