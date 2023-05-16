import { z, defineCollection } from 'astro:content';

const features = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        draft: z.boolean().optional(),
    })
})
export const collections = {
    'features': features,
};