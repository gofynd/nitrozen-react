import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import image from "@rollup/plugin-image";
import { terser } from "rollup-plugin-terser";
const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        dir: "dist/cjs",
        format: "cjs",
        preserveModules: true,
        exports: "auto",
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
      typescript({
        tsconfig: "./tsconfig.json",
        outDir: "dist/cjs",
        declarationDir: "dist/cjs/types",
      }),
      postcss({
        modules: true,
        minimize: true,
        inject: true,
      }),
      terser(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "src/index.ts",
    output: [
      {
        dir: "dist/esm",
        format: "esm",
        preserveModules: true,
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
      typescript({
        tsconfig: "./tsconfig.json",
        outDir: "dist/esm",
        declarationDir: "dist/esm/types",
      }),
      postcss(),
      terser(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "dist/esm/types/src/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm", sourcemap: true }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/],
  },
];
