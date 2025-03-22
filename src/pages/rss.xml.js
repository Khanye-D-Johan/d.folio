import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: 'Johan\'s Dev. & More | Blog',
    description: 'Blog on Johan Khanye\'s Development & more learning journey.',
    site: context.site,
    items: posts.map((post)=>({
      title: post.data.title,
      pubDate: post.data.publishedOn,
      description: post.data.description,
      link: `/posts/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
};