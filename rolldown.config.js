import { defineConfig } from "rolldown"

// Rewrites inter-chunk import specifiers from relative paths like './decode.js'
// to bare specifiers like 'decode', enabling importmap resolution in the browser.
function bareSpecifiers() {
  return {
    name: "bare-specifiers",
    renderChunk(code) {
      const result = code
        // Static imports:  from './name.js'  →  from 'name'
        .replace(
          /from\s*["']\.\/([^"']+)\.js["']/g,
          (_, name) => `from '${name}'`
        )
        // Dynamic imports: import('./name.js') → import('name')
        .replace(
          /import\(\s*["']\.\/([^"']+)\.js["']\s*\)/g,
          (_, name) => `import('${name}')`
        )
      return { code: result }
    }
  }
}

export default defineConfig({
  input: "index.js",
  plugins: [bareSpecifiers()],
  output: {
    dir: "dist",
    format: "esm",
    minify: true,
    chunkFileNames: "[name].js",
    entryFileNames: "[name].js"
  }
})
