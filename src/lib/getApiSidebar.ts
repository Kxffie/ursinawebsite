import type { CollectionEntry } from 'astro:content';
import { getCollection }       from 'astro:content';

type Doc = CollectionEntry<'api'>;

export async function getApiSidebar(): Promise<{
  categories: string[];
  grouped: Record<string, Doc[]>;
}> {
  const docs = await getCollection('api');
  const grouped = docs.reduce<Record<string,Doc[]>>((acc, d) => {
    const cat = d.data.category || 'Uncategorized';
    (acc[cat] ??= []).push(d);
    return acc;
  }, {});
  const categories = Object.keys(grouped)
    .sort((a,b) => {
      // if you ever want to order by category‑sort you can do it here
      return a.localeCompare(b);
    });
  for (const cat of categories) {
    grouped[cat].sort((a,b) => (a.data.sort ?? 0) - (b.data.sort ?? 0));
  }
  return { categories, grouped };
}
