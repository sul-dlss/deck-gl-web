import { defineConfig } from "rolldown"

export default defineConfig({
  input: "index.js",
  output: {
    dir: "dist",
    format: "esm",
    minify: true
  }
})
