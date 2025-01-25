import {
  ComputedFields,
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files"
import readingTime from "reading-time"
// import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

// import rehypePrism from 'rehype-prism-plus';
import blurImage from "@/lib/blur-images"

const getLocale = (path: string) => {
  const pathArray = path.split(".")
  return pathArray.length > 2 ? pathArray.slice(-2)[0] : "en"
}

const computedFields: ComputedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: "number",
    resolve: (doc) => doc.body.raw.split(/\s+/g).length,
  },
  // tweetIds: {
  //   type: 'json',
  //   resolve: (doc) => {
  //     const tweetMatches = doc.body.raw.match(
  //       /<StaticTweet\sid="[0-9]+"\s\/>/g
  //     );
  //     const tweetIDs = tweetMatches?.map(
  //       (tweet: any) => tweet.match(/[0-9]+/g)[0]
  //     );
  //     return tweetIDs ?? [];
  //   }
  // },
  slug: {
    type: "string",
    resolve: (doc) => {
      // console.log(doc._raw.sourceFileName.split('.')[0]);
      return doc._raw.sourceFileName.split(".")[0]
    },
  },
  locale: {
    type: "string",
    resolve: (doc) => {
      // console.log(getLocale(doc._raw.sourceFilePath));
      return getLocale(doc._raw.sourceFilePath)
    },
  },
  mainImageBlurDataURL: {
    type: "string",
    resolve: async (doc) => {
      // const dataURL = doc.image;
      const { imgBase64 } = await blurImage(doc.mainImage)
      // console.log(dataURL ?? '');
      return imgBase64
    },
  },
}

const Category = defineNestedType(() => ({
  name: "Category",
  fields: {
    name: { type: "string", required: true, description: "Category name" },
    slug: {
      type: "string",
      required: true,
      description: "Category slug without spaces",
    },
  },
}))

const Tag = defineNestedType(() => ({
  name: "Tag",
  fields: {
    name: { type: "string", required: true, description: "Tag name" },
    slug: {
      type: "string",
      required: true,
      description: "Tag slug without spaces",
    },
  },
}))

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "blog/**/*.mdx",
  contentType: "mdx",
  fields: {
    featured: { type: "boolean", default: false },
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    mainImage: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    categories: { type: "list", of: Category, required: true },
    tags: { type: "list", of: Tag, required: true },
  },
  computedFields,
}))

const Newsletter = defineDocumentType(() => ({
  name: "Newsletter",
  filePathPattern: "newsletter/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    summary: { type: "string", required: true },
    mainImage: { type: "string", required: true },
  },
  computedFields,
}))

// const Snippet = defineDocumentType(() => ({
//   name: 'Snippet',
//   filePathPattern: 'snippets/*.mdx',
//   contentType: 'mdx',
//   fields: {
//     title: { type: 'string', required: true },
//     description: { type: 'string', required: true },
//     logo: { type: 'string', required: true }
//   },
//   computedFields
// }));

// const OtherPage = defineDocumentType(() => ({
//   name: 'OtherPage',
//   filePathPattern: '*.mdx',
//   contentType: 'mdx',
//   fields: {
//     title: { type: 'string', required: true }
//   },
//   computedFields
// }));

const contentLayerConfig = makeSource({
  contentDirPath: "./data",
  documentTypes: [Post, Newsletter],
  // mdx: {
  //   remarkPlugins: [remarkGfm],
  //   rehypePlugins: [
  //     rehypeSlug,
  //     rehypeCodeTitles,
  //     rehypePrism,
  //     [
  //       rehypeAutolinkHeadings,
  //       {
  //         properties: {
  //           className: ['anchor']
  //         }
  //       }
  //     ]
  //   ]
  // }
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node: any) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }]
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className.push("line--highlighted")
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = ["word--highlighted"]
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
})

export default contentLayerConfig
