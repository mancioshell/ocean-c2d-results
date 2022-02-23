const path = require("path");

module.exports = {
  webpack: {
    alias: {
      Components: path.resolve(__dirname, "src/components/"),
      Contexts: path.resolve(__dirname, "src/contexts/"),
      Providers: path.resolve(__dirname, "src/providers/"),
      Services: path.resolve(__dirname, "src/services/"),
      Pages: path.resolve(__dirname, "src/pages/"),
      Public: path.resolve(__dirname, "public/"),
      Root: path.resolve(__dirname, "src/"),
    },
  },
};
