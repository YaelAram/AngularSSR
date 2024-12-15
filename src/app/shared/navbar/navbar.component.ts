import { Component, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'shared-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  readonly navItems = computed(() => [
    { label: 'Pokedex', path: '/pokemon/0' },
    { label: 'About Page', path: '/about' },
    { label: 'Pricing Page', path: '/pricing' },
    { label: 'Contact Page', path: '/contact' },
  ]);
}
