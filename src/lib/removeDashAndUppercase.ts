function removeDashAndUppercase(slug: string): string {
  return slug.replace(/-/g, " ").toUpperCase();
}

export { removeDashAndUppercase };
