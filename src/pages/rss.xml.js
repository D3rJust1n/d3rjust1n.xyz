import rss from '@astrojs/rss';
import { siteConfig } from '../config';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const collection = 'blog';
  const blog = await getCollection(collection);
  return rss({
    title: siteConfig.title,
    description: siteConfig.description || siteConfig.slogan,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: context.site + collection + '/' + post.id,
      pubDate: post.data.pubDate,
      content: post.body,
    })),
  });
}
