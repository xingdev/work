const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
        // uglify: true
      },
      useBuiltIns: "usage"
    }
  ],
  "@babel/preset-react",
  "@babel/preset-typescript"
];

const plugins = [
  ["@babel/plugin-proposal-decorators", { legacy: true }],
  ["@babel/plugin-proposal-class-properties", { loose: true }],
  ["import", { libraryName: "antd", libraryDirectory: "lib", style: "css" }],
  "@babel/plugin-syntax-dynamic-import"
];

module.exports = { presets, plugins };
