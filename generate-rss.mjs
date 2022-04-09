import { writeFileSync } from 'fs';
import RSS from 'rss';
import * as api from './lib/blog-api.mjs';
const { getAllPosts } = api;

async function generate() {
  const enFeed = new RSS({
    title: 'JuanCamiloQHz',
    site_url: 'https://juancamiloqhz.vercel.app',
    feed_url: 'https://juancamiloqhz.vercel.app/feed.xml',
    language: 'en',
  });
  const enPosts = getAllPosts(['title', 'date', 'slug', 'excerpt'], 'en');
  const esPosts = getAllPosts(['title', 'date', 'slug', 'excerpt'], 'es');
  enPosts.map((post) => {
    enFeed.item({
      title: post.title,
      url: `https://juancamiloqhz.vercel.app/blog/${post.slug}`,
      date: post.date,
      description: post.excerpt,
    });
  });

  writeFileSync('./public/feed.xml', enFeed.xml({ indent: true }));
}

generate();
