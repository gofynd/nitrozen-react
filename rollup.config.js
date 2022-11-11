import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import image from "@rollup/plugin-image";
const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      image({
        output: "dist/assets",
        extensions: /\.(png|jpg|jpeg|gif|svg)$/,
        limit: 10000,
      }),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "dist/esm/src/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm", sourcemap: true }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/],
  },
];
