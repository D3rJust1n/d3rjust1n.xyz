import type { ImageMetadata } from 'astro';
import type { SocialLinks } from './social';

const avatarFiles = import.meta.glob<{ default: ImageMetadata }>(
  '/src/images/avatars/*.{jpeg,jpg,png,gif,webp}',
  { eager: true }
);

export interface Author {
  id: string;
  name: string;
  avatar?: string;
  bio?: string;
  social?: SocialLinks;
}

const authorFiles = import.meta.glob<{ default: Author }>(
  '/src/data/authors/*.json',
  { eager: true }
);

export const authors: Record<string, Author> = Object.fromEntries(
  Object.values(authorFiles).map((mod) => [mod.default.id, mod.default])
);

export function getAuthor(authorId: string): Author | undefined {
  return authors[authorId];
}

export function getAvatar(filename?: string): ImageMetadata | undefined {
  if (!filename) return undefined;
  const entry = Object.entries(avatarFiles).find(([path]) =>
    path.endsWith(`/${filename}`)
  );
  return entry?.[1]?.default;
}

export function getAuthors(authorIds: string | string[]): Author[] {
  const ids = Array.isArray(authorIds) ? authorIds : [authorIds];
  return ids
    .map((id) => getAuthor(id))
    .filter((author): author is Author => author !== undefined);
}
