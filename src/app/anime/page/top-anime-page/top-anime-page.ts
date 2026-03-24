import { Component, ChangeDetectionStrategy, computed, input, inject, linkedSignal } from '@angular/core';
import { topAnimeResource } from '../../helpers/resource';
import { AnimeListParams } from '../../types';
import { ListAnime } from '../../components/list-anime/list-anime';
import { Router, RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { disabled, form, FormField, submit } from '@angular/forms/signals';
import { purnEmptyProperties } from '../../helpers/utils';

@Component({
  selector: 'app-top-anime-page',
  imports: [ListAnime, RouterLink, DecimalPipe, FormField],
  templateUrl: './top-anime-page.html',
  styleUrl: './top-anime-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopAnimePage {
  readonly q = input<string>();
  readonly page = input<string>();
  private readonly router = inject(Router)
  private readonly params = computed<AnimeListParams>(() => ({
    q: this.q() ?? '',
    page: this.page() ?? ''
  }))

  readonly resource = topAnimeResource(() => this.params());


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
