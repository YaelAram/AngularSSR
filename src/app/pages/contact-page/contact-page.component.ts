import { Component, inject, OnInit } from '@angular/core';
import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'contact-page',
  imports: [],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css',
})
export default class ContactPageComponent implements OnInit {
  #seo = inject(SeoService);

  ngOnInit(): void {
    this.#seo.updateMeta('CONTACT');
  }
}
