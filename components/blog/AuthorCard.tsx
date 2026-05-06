import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { getAuthorInitials } from '@/lib/blog';
import type { OrganiAuthorDetails } from '@/lib/organi';

interface AuthorCardProps {
  author: OrganiAuthorDetails;
}

export default function AuthorCard({ author }: AuthorCardProps) {
  const links = [
    { label: 'X', href: author.socialLinks?.x || null },
    { label: 'Website', href: author.socialLinks?.website || null },
    { label: 'LinkedIn', href: author.socialLinks?.linkedin || null }
  ].filter((link): link is { label: string; href: string } => Boolean(link.href));

  return (
    <Card className="w-full max-w-md rounded-[2rem] border-border bg-card shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <CardContent className="space-y-5 p-6 text-center">
        <div className="flex flex-col items-center gap-4">
          <Avatar className="h-16 w-16 border border-border">
            {author.avatarUrl && <AvatarImage src={author.avatarUrl} alt={author.name} />}
            <AvatarFallback className="bg-foreground text-base font-semibold text-background">
              {getAuthorInitials(author.name)}
            </AvatarFallback>
          </Avatar>

          <div className="min-w-0 space-y-1">
            <p className="text-xl font-semibold text-card-foreground">{author.name}</p>
          </div>
        </div>

        {author.bio && <p className="text-sm leading-7 text-muted-foreground">{author.bio}</p>}

        {links.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-4 py-2 font-medium text-muted-foreground transition hover:bg-accent hover:text-accent-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
