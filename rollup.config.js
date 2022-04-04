const json = require("@rollup/plugin-json");
const commonjs = require("@rollup/plugin-commonjs");
module.exports = {
  /** 打包入口文件 */
  input: ["./index.js"],
  /** 输出配置 */
  output: {
    /** 输出目录 */
    dir: "./bin",
    /** 输出文件为 CommonJS格式 */
    format: "pnpm-cli-js",
  },
  plugins: [json(), commonjs({ extensions: [".js", ".ts", ".json"] })],
};
