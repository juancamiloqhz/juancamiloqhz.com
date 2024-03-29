import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const postsDirectory = join(process.cwd(), 'posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory); // ['hello-world.en.md', 'hello-world.es.md']
}

export function uniquePostSlugs() {
  return [
    ...new Set(
      fs.readdirSync(postsDirectory).map((slug) => slug.split('.')[0]),
    ),
  ]; // ['hello-world.en.md', 'hello-world.es.md']
}

export function getPostBySlug(slug, locale, fields = []) {
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
  const slugs = uniquePostSlugs();
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
export function getAllTagSlugs(locales) {
  const slugs = uniquePostSlugs();
  const tags = [];
  for (const locale of locales) {
    for (const slug of slugs) {
      const post = getPostBySlug(slug, locale, ['tags']);
      post.tags.map((tag) => tags.push(tag.split(':')[0]));
    }
  }
  // console.log(tags);
  return [...new Set(tags)];
}

export function getAllPostsByTag(tagSlug, locale, fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .filter((slug) => isPostInTag(tagSlug, slug, locale))
    .map((slug) => getPostBySlug(slug, locale, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  // console.log(posts);
  const tagData = posts[0].tags.find((tag) => {
    return tag.split(':')[0] === tagSlug;
  });
  return {
    posts,
    tag: { name: tagData.split(':')[1], slug: tagSlug },
  };
}

function isPostInTag(tag, slug, locale) {
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
export function getAllCategoriesSlugs(locales) {
  const slugs = uniquePostSlugs();
  const categories = [];
  for (const locale of locales) {
    for (const slug of slugs) {
      const post = getPostBySlug(slug, locale, ['categories']);
      post.categories.map((category) =>
        categories.push(category.split(':')[0]),
      );
    }
  }
  // console.log(categories);
  return [...new Set(categories)];
}

export function getAllPostsByCategory(categorySlug, locale, fields = []) {
  const slugs = uniquePostSlugs();
  const posts = slugs
    .filter((slug) => isPostInCategory(categorySlug, slug, locale))
    .map((slug) => getPostBySlug(slug, locale, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  // console.log(posts);
  const categoryData = posts[0].categories.find((category) => {
    return category.split(':')[0] === categorySlug;
  });
  return {
    posts,
    category: { name: categoryData.split(':')[1], slug: categorySlug },
  };
}

function isPostInCategory(category, slug, locale) {
  const realSlug = slug.replace(/\.md$/, '').split('.')[0];
  const fullPath = join(postsDirectory, `${realSlug}.${locale}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(fileContents, {});
  const categorySlugs = data.categories.map(
    (category) => category.split(':')[0],
  );
  // console.log(data.categories);
  if (categorySlugs.includes(category.split(':')[0])) {
    return true;
  }
  return false;
}
