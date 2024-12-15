import { Component, inject, OnInit } from '@angular/core';
import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'pricing-page',
  imports: [],
  templateUrl: './pricing-page.component.html',
  styleUrl: './pricing-page.component.css',
})
export default class PricingPageComponent implements OnInit {
  #seo = inject(SeoService);

  ngOnInit(): void {
    this.#seo.updateMeta('PRICING');
  }
}
