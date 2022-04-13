export const sanityConfig = {
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
	apiVersion: '2021-11-11',
	useCdn: process.env.NODE_ENV === 'production',
}
