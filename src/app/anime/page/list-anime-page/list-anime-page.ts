import { Component, ChangeDetectionStrategy, signal, input, computed, linkedSignal, inject } from '@angular/core';
import { ListAnime } from '../../components/list-anime/list-anime';
import { animeListResource } from '../../helpers/resource';
import { AnimeListParams } from '../../types';
import { Router, RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';



@Component({
  selector: 'app-list-anime-page',
  imports: [ListAnime, RouterLink, DecimalPipe],
  templateUrl: './list-anime-page.html',
  styleUrl: './list-anime-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListAnimePage {
  readonly q = input<string>();
  readonly page = input<string>();
  private readonly router = inject(Router)
  private readonly params = computed<AnimeListParams>(() => ({
    q: this.q() ?? '',
    page: this.page() ?? ''
  }))




  protected readonly resource = animeListResource(() => this.params());


  protected readonly currentPage = computed(() => Number(this.page() ?? 1));

  protected readonly previousPage = computed(() => {
    if (this.resource.hasValue()) {
      const currentPage = this.resource.value().pagination.current_page;

      if (currentPage === 1) {
        return null;
      }

      return currentPage - 1;
    } else {
      return null;
    }
  });

  protected readonly nextPage = computed(() =>
    this.resource.hasValue() && this.resource.value().pagination.has_next_page
      ? this.resource.value().pagination.current_page + 1
      : null,
  );

}
