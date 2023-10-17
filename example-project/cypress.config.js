const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "@vallme2003/cypress-ct-marko-js",
      bundler: "webpack",
    },
  },
});
