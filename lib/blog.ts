const absoluteDateFormatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

export function formatPublishedAt(dateString: string) {
  const publishedAt = new Date(dateString);
  const diffMs = Date.now() - publishedAt.getTime();
  const dayMs = 24 * 60 * 60 * 1000;

  if (diffMs >= 0 && diffMs < dayMs) {
    const minuteMs = 60 * 1000;
    const hourMs = 60 * minuteMs;

    if (diffMs < minuteMs) {
      return 'just now';
    }

    if (diffMs < hourMs) {
      const minutes = Math.max(1, Math.floor(diffMs / minuteMs));
      return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    }

    const hours = Math.max(1, Math.floor(diffMs / hourMs));
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  }

  return absoluteDateFormatter.format(publishedAt);
}

export function formatReadingTime(readingTimeMins: number | null) {
  if (!readingTimeMins) {
    return null;
  }

  return `${readingTimeMins} min read`;
}

export function getAuthorInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}
