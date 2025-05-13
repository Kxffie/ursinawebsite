import type { CollectionEntry, CollectionKey } from 'astro:content';
import { getCollection } from 'astro:content';

/* grab the first integer in any value, or undefined */
const num = (v: unknown): number | undefined => {
  const m = String(v ?? '').match(/-?\d+/);
  return m ? parseInt(m[0], 10) : undefined;
};

/* remove “[n] ” prefix so visitors never see the weight */
const clean = (label: string) => label.replace(/^\[\s*\d+]\s*/, '');

export async function getSidebarData<Key extends CollectionKey>(
  base: Key,
): Promise<{
  categories: string[];
  grouped: Record<string, CollectionEntry<Key>[]>;
}> {
  const files = await getCollection(base);

  /* group by raw category label */
  const buckets = new Map<string, CollectionEntry<Key>[]>();
  for (const f of files) {
    const cat = String((f.data as any).category ?? 'Uncategorized');
    (buckets.get(cat) ?? buckets.set(cat, []).get(cat)!).push(f);
  }

  /* sort inside each bucket */
  for (const list of buckets.values()) {
    list.sort((a, b) => {
      const aSort = num((a.data as any).sort) ?? Number.MAX_SAFE_INTEGER;
      const bSort = num((b.data as any).sort) ?? Number.MAX_SAFE_INTEGER;
      if (aSort !== bSort) return aSort - bSort;
      return a.data.title.localeCompare(b.data.title);
    });
  }

  /* sort the buckets themselves */
  const ordered = Array.from(buckets.keys()).sort((a, b) => {
    const aUnc = a.toLowerCase() === 'uncategorized';
    const bUnc = b.toLowerCase() === 'uncategorized';
    if (aUnc !== bUnc) return aUnc ? -1 : 1;

    const aNum = num(a);
    const bNum = num(b);
    if (aNum != null && bNum != null && aNum !== bNum) return aNum - bNum;
    if (aNum != null && bNum == null) return -1;
    if (aNum == null && bNum != null) return 1;

    return a.localeCompare(b);
  });

  const grouped: Record<string, CollectionEntry<Key>[]> = {};
  ordered.forEach((raw) => (grouped[clean(raw)] = buckets.get(raw)!));

  return { categories: ordered.map(clean), grouped };
}
