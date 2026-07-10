export function formatDate(date: Date): string {
  return date.toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function isPublished(date: Date): boolean {
  return date <= new Date();
}
