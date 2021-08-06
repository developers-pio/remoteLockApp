module.exports = {
  plugins: [["babel-plugin-transform-remove-imports", { test: "(?:dhtmlx)" }]],
  presets: ["@babel/preset-env", "@babel/preset-react"]
};
