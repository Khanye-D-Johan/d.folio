import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.id}/`,
		})),
	});
}


// import rss, { pagesGlobToRssItems } from '@astrojs/rss';
// import { getCollection } from 'astro:content';

// export async function GET(context) {
//   const posts = await getCollection('blog');
//   return rss({
//     title: 'Johan\'s Dev. & More | Blog',
//     description: 'Blog on Johan Khanye\'s Development & more learning journey.',
//     site: context.site,
//     items: posts.map((post)=>({
//       title: post.data.title,
//       pubDate: post.data.publishedOn,
//       description: post.data.description,
//       link: `/posts/${post.id}/`,
//     })),
//     customData: `<language>en-us</language>`,
//   });
// };