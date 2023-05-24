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

const programs = defineCollection({
    schema: z.object({
        title: z.string(),
        href: z.string().optional(),
        description1: z.string(),
        description2: z.string().optional(),
        leaderTitle: z.string(),
        leaderNames: z.string(),
        leaderImage: z.string().optional(),
        email: z.string().optional(),
        programPhoto: z.string().optional(),
        flierImage: z.string().optional(),
        draft: z.boolean().optional()
    })
})

export const collections = {
    'features': features,
    'highlights': highlights,
    'events': events,
    'programs': programs,
};