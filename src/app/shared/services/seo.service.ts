import { inject, Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { PageMetaKey, pagesMeta } from '../../constants/pages-meta';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  #title = inject(Title);
  #meta = inject(Meta);

  updateSeo(title: string, page: PageMetaKey, meta: MetaDefinition[] = []) {
    this.updateTitle(title);
    this.updateMeta(page, meta);
  }

  updateTitle(title: string) {
    this.#title.setTitle(title);
  }

  updateMeta(page: PageMetaKey, meta: MetaDefinition[] = []) {
    const tags = pagesMeta[page] as MetaDefinition[];
    for (let tag of tags.concat(meta)) this.#meta.updateTag(tag);
  }
}
