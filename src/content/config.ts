import { z, defineCollection } from 'astro:content';

const features = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string().optional(),
        alt: z.string().optional(),
        draft: z.boolean().optional(),
    })
})

const highlights = defineCollection({
    schema: z.object({
        icon: z.string(),
        alt: z.string(),
        title: z.string(),
        description: z.string(),
        draft: z.boolean().optional(),
    })
})
export const collections = {
    'features': features,
    'highlights': highlights
};