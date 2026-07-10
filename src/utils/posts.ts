import type { CollectionEntry } from 'astro:content';
import { isPublished } from './date';

export interface PostFilter {
  maxPosts?: number;
  tags?: string[];
  excludeTags?: string[];
}

export function sortPostsByDate(
  posts: CollectionEntry<'blog'>[]
): CollectionEntry<'blog'>[] {
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
}

export function filterPublishedPosts(
  posts: CollectionEntry<'blog'>[]
): CollectionEntry<'blog'>[] {
  return posts.filter(
    (post) => !post.data.draft && isPublished(post.data.pubDate)
  );
}

export function filterPosts(
  posts: CollectionEntry<'blog'>[],
  filter: PostFilter = {}
): CollectionEntry<'blog'>[] {
  let filteredPosts = filterPublishedPosts(posts);

  if (filter.tags?.length) {
    filteredPosts = filteredPosts.filter((post) =>
      filter.tags!.some((tag) => post.data.tags?.includes(tag))
    );
  }

  if (filter.excludeTags?.length) {
    filteredPosts = filteredPosts.filter(
      (post) =>
        !filter.excludeTags!.some((tag) => post.data.tags?.includes(tag))
    );
  }

  filteredPosts = sortPostsByDate(filteredPosts);

  if (filter.maxPosts) {
    filteredPosts = filteredPosts.slice(0, filter.maxPosts);
  }

  return filteredPosts;
}

export function getPostsByTag(
  posts: CollectionEntry<'blog'>[],
  tag: string
): CollectionEntry<'blog'>[] {
  return posts.filter(
    (post) =>
      post.data.tags?.includes(tag) &&
      !post.data.draft &&
      isPublished(post.data.pubDate)
  );
}

export function getAllTags(posts: CollectionEntry<'blog'>[]): string[] {
  const publishedPosts = filterPublishedPosts(posts);
  return [
    ...new Set(publishedPosts.flatMap((post) => post.data.tags || [])),
  ].sort();
}
