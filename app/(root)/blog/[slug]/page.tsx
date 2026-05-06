import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import AuthorCard from '@/components/blog/AuthorCard';
import { formatPublishedAt, formatReadingTime } from '@/lib/blog';
import { getOrganiPost } from '@/lib/organi';

export const dynamic = 'force-dynamic';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    const post = await getOrganiPost(params.slug);

    return {
      title: `${post.seoTitle || post.title} | Blog | Biyinzika Joshua`,
      description: post.seoDescription || post.excerpt || undefined
    };
  } catch {
    return {
      title: 'Post Not Found | Blog | Biyinzika Joshua'
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getOrganiPost(params.slug).catch(() => null);

  if (!post) {
    notFound();
  }

  const publishedAt = formatPublishedAt(post.publishedAt);
  const readingTime = formatReadingTime(post.readingTimeMins);
  const primaryCategory = post.categories[0];
  const tags = post.tags.slice(0, 3);

  return (
    <main className="min-h-screen bg-background px-6 py-10 text-foreground transition-colors md:px-8 md:py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <article className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2.25rem] border border-border bg-card text-card-foreground shadow-[0_20px_80px_rgba(15,23,42,0.10)]">
          <div className="space-y-10 p-6 md:p-10">
            <header className="space-y-8 text-center">
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
                <span className="rounded-full bg-foreground px-3 py-1 font-medium text-background">
                  {publishedAt}
                </span>
                {readingTime && (
                  <span className="rounded-full border border-border px-3 py-1">{readingTime}</span>
                )}
                {primaryCategory && (
                  <span className="rounded-full border border-border px-3 py-1">
                    {primaryCategory.name}
                  </span>
                )}
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
                  {post.title}
                </h1>
              </div>

              {post.featuredImageUrl && (
                <div className="overflow-hidden rounded-[2rem] bg-muted">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.featuredImageUrl}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}

              {tags.length > 0 && (
                <div className="flex flex-wrap justify-center gap-3">
                  {tags.map((tag) => (
                    <span
                      key={tag.slug}
                      className="rounded-full bg-muted px-4 py-2 text-sm font-medium text-muted-foreground"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              )}
            </header>

            <section
              className="max-w-none text-lg leading-8 text-muted-foreground [&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_blockquote]:border-l-4 [&_blockquote]:border-border [&_blockquote]:pl-6 [&_blockquote]:italic [&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_h1]:mt-10 [&_h1]:text-4xl [&_h1]:font-semibold [&_h1]:leading-tight [&_h1]:tracking-tight [&_h1]:text-foreground [&_h2]:mt-10 [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:leading-tight [&_h2]:text-foreground [&_h3]:mt-8 [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-foreground [&_li]:ml-6 [&_li]:list-disc [&_ol]:space-y-3 [&_p]:my-5 [&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre]:rounded-[1.5rem] [&_pre]:bg-slate-950 [&_pre]:p-5 [&_pre]:text-sm [&_pre]:leading-7 [&_pre]:text-slate-100 [&_strong]:text-foreground [&_ul]:space-y-3"
              dangerouslySetInnerHTML={{ __html: post.htmlContent }}
            />

            {post.author && (
              <div className="space-y-8 pt-6">
                <hr className="border-border" />
                <div className="space-y-4">
                  <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    Author
                  </p>
                  <div className="flex justify-center">
                    <AuthorCard author={post.author} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </article>
      </div>
    </main>
  );
}
