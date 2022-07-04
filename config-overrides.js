const path = require("path");
const { override, addWebpackAlias } = require("customize-cra");

module.exports = override(
  addWebpackAlias({
    "@ui-kit": path.resolve(__dirname, "src/ui-kit"),
    "@constants": path.resolve(__dirname, "src/constants"),
    "@": path.resolve(__dirname, "src"),
  })
);
