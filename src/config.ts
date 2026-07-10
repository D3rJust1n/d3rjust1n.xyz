import type { PostFilter } from './utils/posts';

export interface SiteConfig {
  title: string;
  slogan: string;
  description?: string;
  site: string;
  social: {
    github?: string;
    codeberg?: string;
    email?: string;
    youtube?: string;
    anilist?: string;
    mastodon?: string;
    bsky?: string;
    twitch?: string;
    discord?: string;
    instagram?: string;
    rss?: boolean;
  };
  homepage: PostFilter;
  search?: boolean;
}

export const siteConfig: SiteConfig = {
  site: 'https://d3rjust1n.xyz',
  title: 'D3rJust1n',
  slogan: 'Hello, ich bin Justin',
  description: 'Freund von Open Source und Linux',
  social: {
    github: 'https://github.com/D3rJust1n',
    email: 'contact@d3rjust1n.xyz',
    youtube: 'https://youtube.com/@d3rjust1n',
    anilist: 'https://anilist.co/user/d3rjust1n',
    codeberg: 'https://codeberg.org/d3rjust1n',
    mastodon: 'https://mastodon.social/@d3rjust1n',
    bsky: 'https://bsky.app/profile/d3rjust1n.bsky.social',
    twitch: 'https://twitch.tv/d3rjust1nn',
    instagram: 'https://www.instagram.com/d3rjust1n',
    discord: 'https://d3r.eu/dc',
    rss: true,
  },
  homepage: {
    maxPosts: 5,
    tags: [],
    excludeTags: [],
  },
  search: true,
};
