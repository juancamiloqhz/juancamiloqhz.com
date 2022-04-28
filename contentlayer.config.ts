import {
  ComputedFields,
  defineDocumentType,
  makeSource
} from 'contentlayer/source-files';

import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';

const getLocale = (path: string) => {
  const pathArray = path.split('.');
  return pathArray.length > 2 ? pathArray.slice(-2)[0] : 'en';
};

const computedFields: ComputedFields = {
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: 'number',
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length
  },
  tweetIds: {
    type: 'json',
    resolve: (doc) => {
      const tweetMatches = doc.body.raw.match(
        /<StaticTweet\sid="[0-9]+"\s\/>/g
      );
      const tweetIDs = tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)[0]);
      return tweetIDs ?? [];
    }
  },
  slug: {
    type: 'string',
    resolve: (doc) => {
      // console.log(doc._raw.sourceFileName.split('.')[0]);
      return doc._raw.sourceFileName.split('.')[0];
    }
  },
  locale: {
    type: 'string',
    resolve: (doc) => {
      // console.log(getLocale(doc._raw.sourceFilePath));
      return getLocale(doc._raw.sourceFilePath);
    }
  },
  categories: {
    type: 'json',
    resolve: (doc) => {
      const categories = doc.categories;
      // console.log(categories ?? []);
      return categories ?? [];
    }
  },
  tags: {
    type: 'json',
    resolve: (doc) => {
      const tags = doc.tags;
      // console.log(tags ?? []);
      return tags ?? [];
    }
  }
};

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'blog/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    image: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
    categories: { type: 'json', required: true },
    tags: { type: 'json', required: true }
  },
  computedFields
}));

// const Newsletter = defineDocumentType(() => ({
//   name: 'Newsletter',
//   filePathPattern: 'newsletter/*.mdx',
//   contentType: 'mdx',
//   fields: {
//     title: { type: 'string', required: true },
//     publishedAt: { type: 'string', required: true },
//     summary: { type: 'string', required: true },
//     image: { type: 'string', required: true }
//   },
//   computedFields
// }));

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
  contentDirPath: 'data',
  documentTypes: [
    Blog
    // Newsletter,
    // Snippet,
    //  OtherPage
  ],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor']
          }
        }
      ]
    ]
  }
});

export default contentLayerConfig;
