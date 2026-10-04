import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { parse } from 'yaml';

// YAML の配列を読み込み、各要素に連番の id を振る
const yamlList = (text: string) =>
	(parse(text) as object[]).map((entry, i) => ({ id: String(i), ...entry }));

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	results: defineCollection({
		loader: file('src/data/results.yaml', { parser: yamlList }),
		schema: z.object({
			date: z.coerce.date(),
			contest: z.string(),
			url: z.url().optional(),
			team: z.string().optional(),
			rank: z.number().int().positive(),
			prize: z.string().optional(),
			major: z.boolean().default(false),
		}),
	}),
	accounts: defineCollection({
		loader: file('src/data/accounts.yaml', { parser: yamlList }),
		schema: z.object({
			category: z.string(),
			items: z.array(
				z.object({
					site: z.string(),
					user: z.string(),
					url: z.url().optional(),
				}),
			),
		}),
	}),
};
