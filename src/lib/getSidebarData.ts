import type { CollectionEntry, CollectionKey } from 'astro:content';
import { getCollection } from 'astro:content';

/* pull the first integer out of any value */
const firstInt = (value: unknown): number | undefined => {
  const match = String(value ?? '').match(/-?\d+/);
  return match ? parseInt(match[0], 10) : undefined;
};

/* strip “[n] ” from the front so visitors never see the weight */
const cleanLabel = (label: string) => label.replace(/^\[\s*\d+]\s*/, '');

export async function getSidebarData<Key extends CollectionKey>(
  base: Key,
): Promise<{
  categories: string[];
  grouped: Record<string, CollectionEntry<Key>[]>;
}> {
  const files = await getCollection(base);

  /* put files into buckets keyed by raw category label */
  const buckets = new Map<string, CollectionEntry<Key>[]>();
  for (const file of files) {
    const category = String((file.data as any).category ?? 'Uncategorized');

    if (!buckets.has(category)) {
      buckets.set(category, []);
    }
    buckets.get(category)!.push(file);
  }

  /* sort inside each bucket */
  for (const list of buckets.values()) {
    list.sort((a, b) => {
      const aSort = firstInt((a.data as any).sort) ?? Number.MAX_SAFE_INTEGER;
      const bSort = firstInt((b.data as any).sort) ?? Number.MAX_SAFE_INTEGER;

      if (aSort !== bSort) {
        return aSort - bSort;
      }
      return (a.data.title as string).localeCompare(b.data.title);
    });
  }

  /* order the buckets themselves */
  const ordered = Array.from(buckets.keys()).sort((a, b) => {
    const aUnc = a.toLowerCase() === 'uncategorized';
    const bUnc = b.toLowerCase() === 'uncategorized';
    if (aUnc !== bUnc) return aUnc ? -1 : 1;

    const aNum = firstInt(a);
    const bNum = firstInt(b);
    if (aNum != null && bNum != null && aNum !== bNum) return aNum - bNum;
    if (aNum != null && bNum == null) return -1;
    if (aNum == null && bNum != null) return 1;

    return a.localeCompare(b);
  });

  /* expose cleaned labels plus their sorted lists */
  const grouped: Record<string, CollectionEntry<Key>[]> = {};
  for (const raw of ordered) {
    grouped[cleanLabel(raw)] = buckets.get(raw)!;
  }

  return { categories: ordered.map(cleanLabel), grouped };
}
