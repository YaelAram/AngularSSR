export const pagesMeta = {
  ABOUT: [
    { name: 'description', content: 'This is our about page' },
    { name: 'og:title', content: 'Pokemon SSR: About Page' },
    { name: 'keywords', content: 'About,Angular,SSR' },
  ],
  CONTACT: [
    { name: 'description', content: 'Contact us here' },
    { name: 'og:title', content: 'Pokemon SSR: Contact Page' },
    { name: 'keywords', content: 'Contact,Angular,SSR' },
  ],
  PRICING: [
    { name: 'description', content: 'Our princing' },
    { name: 'og:title', content: 'Pokemon SSR: Pricing Page' },
    { name: 'keywords', content: 'Princing,Angular,SSR' },
  ],
  POKEMON: [
    { name: 'description', content: 'Pokedex' },
    { name: 'og:title', content: 'Pokemon SSR: Pokedex' },
    { name: 'keywords', content: 'Pokedex,Angular,SSR' },
  ],
  EMPTY: [],
};

export type PageMetaKey = keyof typeof pagesMeta;
