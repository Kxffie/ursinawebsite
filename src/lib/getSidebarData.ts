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

	const group = options.groupBy ?? ((d: CollectionEntry<Key>) => (d.data as any).category ?? 'Uncategorized');
	const sortVal =
		options.sortBy ??
		((d: CollectionEntry<Key>) => {
			const s = (d.data as any).sort;
			return typeof s === 'number' ? s : Number.POSITIVE_INFINITY;
		});

	// keep insertion order with Map
	const groupedMap = new Map<string, CollectionEntry<Key>[]>();

	for (const doc of docs) {
		const key = group(doc);
		const arr = groupedMap.get(key) ?? [];
		arr.push(doc);
		groupedMap.set(key, arr);
	}

	// sort each group once
	for (const arr of groupedMap.values()) {
		arr.sort((a, b) => {
			const diff = sortVal(a) - sortVal(b);
			return diff || a.data.title.localeCompare(b.data.title);
		});
	}

	const categories = Array.from(groupedMap.keys()).sort((a, b) => {
		const ua = a.toLowerCase() === 'uncategorized';
		const ub = b.toLowerCase() === 'uncategorized';
		if (ua && !ub) return -1;
		if (!ua && ub) return 1;
		return 0; // preserve original order otherwise
	});

	// convert Map to plain object for Astro props
	const grouped: Record<string, CollectionEntry<Key>[]> = {};
	for (const cat of categories) grouped[cat] = groupedMap.get(cat)!;

	return { categories, grouped };
}
