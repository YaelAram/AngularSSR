import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'about-page',
  imports: [],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css',
})
export default class AboutPageComponent implements OnInit {
  #seo = inject(SeoService);
  #platform = inject(PLATFORM_ID);

  ngOnInit(): void {
    this.#seo.updateMeta('ABOUT');

    if (isPlatformServer(this.#platform)) {
      console.log('Hello from server');
    }

    if (isPlatformBrowser(this.#platform)) {
      console.log('Hello from browser');
    }
  }
}
