import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pricing',
    title: 'Pricing',
    loadComponent: () => import('./pages/pricing-page/pricing-page.component'),
  },
  {
    path: 'contact',
    title: 'Contact us',
    loadComponent: () => import('./pages/contact-page/contact-page.component'),
  },
  {
    path: 'pokemon/by/:id',
    loadComponent: () => import('./pages/by-id-page/by-id-page.component'),
  },
  {
    path: 'pokemon/:page',
    title: 'Pokedex',
    loadComponent: () => import('./pages/pokemon-page/pokemon-page.component'),
  },
  {
    path: 'about',
    title: 'About us',
    loadComponent: () => import('./pages/about-page/about-page.component'),
  },
  {
    path: '**',
    redirectTo: 'pokemon/0',
  },
];
