import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'posts');

export function getPostSlugs() {
  // console.log(fs.readdirSync(postsDirectory));
  return fs.readdirSync(postsDirectory); // [ 'hello-world.en.md', 'hello-world.es.md' ]
}

export function getPostBySlug(slug, locale = 'en', fields = []) {
  const realSlug = slug.replace(/\.md$/, '').split('.')[0]; // hello-world
  // console.log('realSlug', realSlug, locale);
  const fullPath = join(postsDirectory, `${realSlug}.${locale}.md`); // posts/hello-world.en.md
  const fileContents = fs.readFileSync(fullPath, 'utf8'); // '# Hello World'
  const { data, content } = matter(fileContents); // { data: { title: 'Hello World' } }

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      // slug: 'hello-world'
      items[field] = realSlug; // items.slug = 'hello-world'
    }
    if (field === 'content') {
      items[field] = content; // items.content = '# Hello World'
    }
    // console.log(field, data[field]);
    // if (data[field]) {
    //   items[field] = data[field];
    // }
  });
  // console.log(items);

  return { ...items, ...data }; // { slug: 'hello-world', title: 'Hello World', content: '# Hello World' }
}

export function getAllPosts(fields = [], locale) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, locale, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'));
  return posts;
}

// --------------------------------------------------
// By Author
export function getAllAuthorsUsername(locale) {
  const slugs = getPostSlugs();
  const usernames = slugs.map((slug) => {
    const post = getPostBySlug(slug, locale, ['author']);
    return post.author?.username || '';
  });
  // console.log([...new Set(usernames)]);
  return [...new Set(usernames)];
}

export function getAllPostsByAuthor(username, locale, fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .filter((slug) => isAuthor(username, slug))
    .map((slug) => getPostBySlug(slug, locale, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  // console.log(posts);
  return posts;
}

function isAuthor(username, slug, locale) {
  const realSlug = slug.replace(/\.md$/, '').split('.')[0];
  const fullPath = join(postsDirectory, `${realSlug}.${locale}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(fileContents, {});
  // console.log(data.author?.username === username);
  if (data.author?.username === username) {
    return true;
  }
  return false;
}
// --------------------------------------------------
// Tags
export function getAllTagSlugs(locale) {
  const slugs = getPostSlugs();
  const tags = slugs.map((slug) => {
    const post = getPostBySlug(slug, locale, ['tags']);
    // console.log(post.tags.map((tag) => tag.split(':')[0]));
    return post.tags.map((tag) => tag.split(':')[0]);
  });
  // console.log(tags);
  return [...new Set(tags.flat())];
}

export function getAllPostsByTag(tag, locale, fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .filter((slug) => isTag(tag, slug, locale))
    .map((slug) => getPostBySlug(slug, locale, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  // console.log(posts);
  return posts;
}

function isTag(tag, slug, locale) {
  const realSlug = slug.replace(/\.md$/, '').split('.')[0];
  const fullPath = join(postsDirectory, `${realSlug}.${locale}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(fileContents, {});
  const tagSlugs = data.tags.map((tag) => tag.split(':')[0]);
  // console.log(data.tags);
  if (tagSlugs.includes(tag.split(':')[0])) {
    return true;
  }
  return false;
}
// -----------------------------------------------------------------------------
// Categories
export function getAllCategoriesSlugs(locale) {
  const slugs = getPostSlugs();
  const categories = slugs.map((slug) => {
    const post = getPostBySlug(slug, locale, ['categories']);
    // console.log(post.categories.map((category) => category.split(':')[0]));
    return post.categories.map((category) => category.split(':')[0]);
  });
  // console.log(categories);
  return [...new Set(categories.flat())];
}

export function getAllPostsByCategory(category, locale, fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .filter((slug) => isCategory(category, slug, locale))
    .map((slug) => getPostBySlug(slug, locale, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  // console.log(posts);
  return posts;
}

function isCategory(category, slug, locale) {
  const realSlug = slug.replace(/\.md$/, '').split('.')[0];
  const fullPath = join(postsDirectory, `${realSlug}.${locale}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(fileContents, {});
  const categorySlugs = data.categories.map(
    (category) => category.split(':')[0]
  );
  // console.log(data.categories);
  if (categorySlugs.includes(category.split(':')[0])) {
    return true;
  }
  return false;
}
