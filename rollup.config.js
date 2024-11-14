import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      //   useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
          declarationDir: "dist",
          emitDeclarationOnly: false,
        },
      },
    }),
    resolve(),
    commonjs(),
    postcss({
      modules: true,
      use: {
        sass: true,
      },
      minimize: true,
    }),
    copy({
      targets: [{ src: "src/**/*.module.scss", dest: "dist" }],
      flatten: false,
    }),
  ],
  external: ["react", "react-dom", "react/jsx-runtime"],
};
