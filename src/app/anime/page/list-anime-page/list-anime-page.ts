import { Component, ChangeDetectionStrategy, signal, input, computed, linkedSignal, inject } from '@angular/core';
import { ListAnime } from '../../components/list-anime/list-anime';
import { animeListResource } from '../../helpers/resource';
import { AnimeListParams } from '../../types';
import { disabled, form, FormField, submit } from '@angular/forms/signals';
import { Router, RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { purnEmptyProperties } from '../../helpers/utils';


@Component({
  selector: 'app-list-anime-page',
  imports: [ListAnime, FormField, RouterLink, DecimalPipe],
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

  protected readonly form = form(linkedSignal(() => ({ q: this.q() ?? '' })),
    (path) => {
      disabled(path, () => this.resource.isLoading())
    })


  protected onSearch(): void {
    submit(
      this.form,
      async (form) =>
        void this.router.navigate([], {
          queryParams: purnEmptyProperties(form().value()),
          replaceUrl: true
        })
    )
  }

  protected clearSearch(): void {
    this.form.q().value.set('');
    this.onSearch()
  }



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
