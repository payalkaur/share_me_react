import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_POROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-07-24',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true,
    useCdn: false
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);