import 'server-only';

const ORGANI_API_BASE_URL = 'https://organi.tenaar.com/api/v1/';
const DEFAULT_BLOG_SLUG = 'josh-codesdevblog';

type Nullable<T> = T | null;

export interface OrganiAuthorSummary {
  name: string;
  slug: string;
  avatarUrl: string | null;
}

export interface OrganiAuthorDetails extends OrganiAuthorSummary {
  bio: string | null;
  socialLinks: {
    x?: string | null;
    website?: string | null;
    linkedin?: string | null;
  } | null;
}

export interface OrganiCategory {
  id?: string;
  name: string;
  slug: string;
}

export interface OrganiTag {
  id?: string;
  name: string;
  slug: string;
}

export interface OrganiPostListItem {
  id: string;
  title: string;
  slug: string;
  excerpt: Nullable<string>;
  featuredImageUrl: Nullable<string>;
  publishedAt: string;
  readingTimeMins: Nullable<number>;
  author: Nullable<OrganiAuthorSummary>;
  categoryCount: number;
  tagCount: number;
  categories?: OrganiCategory[];
  tags?: OrganiTag[];
}

export interface OrganiPost {
  id: string;
  title: string;
  slug: string;
  excerpt: Nullable<string>;
  featuredImageUrl: Nullable<string>;
  publishedAt: string;
  readingTimeMins: Nullable<number>;
  blog: {
    id: string;
    name: string;
    slug: string;
  };
  author: Nullable<OrganiAuthorDetails>;
  categoryCount: number;
  tagCount: number;
  htmlContent: string;
  seoTitle: Nullable<string>;
  seoDescription: Nullable<string>;
  categories: OrganiCategory[];
  tags: OrganiTag[];
}

interface OrganiPostsResponse {
  items: Array<{
    id: string;
    title: string;
    slug: string;
    excerpt: Nullable<string>;
    featuredImageUrl: Nullable<string>;
    publishedAt: string;
    readingTimeMins: Nullable<number>;
    author: Nullable<OrganiAuthorSummary>;
    categoryCount: number;
    tagCount: number;
    categories?: OrganiCategory[];
    tags?: OrganiTag[];
  }>;
}

interface GetPostsOptions {
  blogSlug?: string;
  page?: number;
  limit?: number;
  categorySlug?: string;
  tagSlug?: string;
  authorSlug?: string;
  search?: string;
}

function getApiKey() {
  const apiKey = process.env.ORGANI_API_KEY;

  if (!apiKey) {
    throw new Error('Missing ORGANI_API_KEY environment variable.');
  }

  return apiKey;
}

function getBlogSlug() {
  return process.env.ORGANI_BLOG_SLUG || DEFAULT_BLOG_SLUG;
}

function createUrl(path: string, query: Record<string, string | number | undefined>) {
  const url = new URL(path, ORGANI_API_BASE_URL);

  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== '') {
      url.searchParams.set(key, String(value));
    }
  });

  return url;
}

async function organiFetch<T>(path: string, query: Record<string, string | number | undefined>) {
  const response = await fetch(createUrl(path, query), {
    headers: {
      'x-api-key': getApiKey()
    },
    cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error(`Organi request failed with status ${response.status}.`);
  }

  return (await response.json()) as T;
}

export async function getOrganiPosts(options: GetPostsOptions = {}) {
  const response = await organiFetch<OrganiPostsResponse>('posts', {
    blogSlug: options.blogSlug || getBlogSlug(),
    page: options.page,
    limit: options.limit,
    categorySlug: options.categorySlug,
    tagSlug: options.tagSlug,
    authorSlug: options.authorSlug,
    search: options.search
  });

  return response.items;
}

export async function getOrganiPost(postSlug: string, blogSlug = getBlogSlug()) {
  return organiFetch<OrganiPost>('post', {
    blogSlug,
    postSlug
  });
}
