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

const events = defineCollection({
    schema: z.object({
        date: z.string(),
        title: z.string(),
        link: z.string().optional(),
        description: z.string().optional(),
        image: z.string().optional(),
        alt: z.string().optional(),
        location: z.string().optional(),
        start: z.string(),
        end: z.string().optional(),
        draft: z.boolean().optional(),

    })
})
export const collections = {
    'features': features,
    'highlights': highlights,
    'events': events
};