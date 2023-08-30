function importAll(r) {
  // console.dir(r.keys(), { depht: null })
  return r.keys().map((fileName) => ({
    link: fileName.substr(1).replace(/\/index\.mdx$/, ""),
    module: r(fileName),
  }))
}

export const posts = importAll(require.context("../pages/blog", true, /\.mdx$/))
