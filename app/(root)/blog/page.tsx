import type { Metadata } from 'next';

import BlogPostCard from '@/components/blog/BlogPostCard';
import { getOrganiPosts } from '@/lib/organi';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Blog | Biyinzika Joshua',
  description: 'Server-rendered posts from the Josh Codes Organi blog.'
};

export default async function BlogPage() {
  const posts = await getOrganiPosts({ limit: 50 });

  return (
    <main className="min-h-screen bg-background px-6 py-10 text-foreground transition-colors md:px-8 md:py-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <section className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Writing
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
            I build things and write sometimes...
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            Tech, Faith, Fiction, Philosophy, Entrepreneurship and all those unhinged ideas I
            definitely don&apos;t want my mom reading xD
          </p>
        </section>

        <section className="mx-auto flex w-full max-w-3xl flex-col gap-6">
          {posts.length > 0 ? (
            posts.map((post) => <BlogPostCard key={post.id} post={post} />)
          ) : (
            <div className="rounded-[2rem] border border-dashed border-border bg-card/70 px-8 py-16 text-center text-muted-foreground">
              No posts are available yet.
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
