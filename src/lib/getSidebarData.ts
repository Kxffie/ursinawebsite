// src/lib/getSidebarData.ts
import type { CollectionEntry, CollectionKey } from 'astro:content';
import { getCollection } from 'astro:content';

export interface SidebarOptions<Key extends CollectionKey> {
  groupBy?: (doc: CollectionEntry<Key>) => string;
  sortBy?: (doc: CollectionEntry<Key>) => number;
}

export async function getSidebarData<Key extends CollectionKey>(
  base: Key,
  options: SidebarOptions<Key> = {}
): Promise<{
  categories: string[];
  grouped: Record<string, CollectionEntry<Key>[]>;
}> {
  const docs = await getCollection(base);

  const groupFn =
    options.groupBy ??
    ((doc: CollectionEntry<Key>) =>
      ((doc.data as any).category as string) ?? 'Uncategorized');

  const sortFn =
    options.sortBy ??
    ((doc: CollectionEntry<Key>) => ((doc.data as any).sort as number) ?? 0);

  const grouped = docs.reduce<Record<string, CollectionEntry<Key>[]>>(
    (acc, doc) => {
      const cat = groupFn(doc);
      ;(acc[cat] ??= []).push(doc);
      return acc;
    },
    {}
  );

  const categories = Object.keys(grouped).sort((a, b) =>
    a.localeCompare(b)
  );

  for (const cat of categories) {
    grouped[cat].sort((a, b) => sortFn(a) - sortFn(b));
  }

  return { categories, grouped };
}
