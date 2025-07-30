import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import { readFileSync } from "fs";
import { builtinModules } from "module";
import esbuild from "rollup-plugin-esbuild";

const pkg = JSON.parse(readFileSync("./package.json", "utf-8"));

const external = [...builtinModules, ...Object.keys(pkg.dependencies || {})];

export default [
  // JS 번들링
  {
    input: {
      "run-dailyBrushed": "scripts/run-dailyBrushed.ts",
    },
    output: {
      dir: "dist/scripts",
      format: "cjs",
      entryFileNames: "[name].js",
      sourcemap: true,
    },
    external,
    plugins: [
      json(),
      resolve({ preferBuiltins: true }),
      commonjs(),
      esbuild({
        tsconfig: "./tsconfig.batch.json",
      }),
    ],
  },
];
