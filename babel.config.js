const presets = [
  ["@babel/preset-react"],
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1"
      },
      useBuiltIns: "usage"
    }
  ]
];

const plugins = [
  "@babel/plugin-proposal-class-properties",
  ["@babel/plugin-proposal-decorators", { legacy: true }],
  ["import", { libraryName: "antd", libraryDirectory: "lib", style: "css" }]
];

module.exports = { presets, plugins };