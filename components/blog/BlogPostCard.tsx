import Link from 'next/link';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatPublishedAt, formatReadingTime } from '@/lib/blog';
import type { OrganiPostListItem } from '@/lib/organi';

interface BlogPostCardProps {
  post: OrganiPostListItem;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const readingTime = formatReadingTime(post.readingTimeMins);
  const publishedAt = formatPublishedAt(post.publishedAt);
  const primaryCategory = post.categories?.[0];
  const tags = post.tags?.slice(0, 3) || [];

  return (
    <Link href={`/blog/${post.slug}`} className="block w-full">
      <Card className="group overflow-hidden rounded-[2rem] border-border bg-card/90 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,23,42,0.14)]">
        <CardHeader className="space-y-5 border-b border-border pb-5">
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
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

          <CardTitle className="text-3xl leading-tight text-card-foreground transition-colors group-hover:text-foreground/80">
            {post.title}
          </CardTitle>

          {post.excerpt && (
            <p className="max-w-3xl text-base leading-7 text-muted-foreground">{post.excerpt}</p>
          )}
        </CardHeader>

        <CardContent className="space-y-4 pt-6">
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag.slug}
                  className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              {post.author?.avatarUrl && (
                <Avatar className="h-8 w-8 border border-border">
                  <AvatarImage src={post.author.avatarUrl} alt={post.author.name} />
                </Avatar>
              )}
              <span>{post.author?.name || 'Unknown author'}</span>
            </div>

            <span className="font-medium text-foreground/80 transition-colors group-hover:text-foreground">
              Read More -&gt;
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
