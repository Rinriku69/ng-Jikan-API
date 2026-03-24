import { Component, ChangeDetectionStrategy, signal, input, computed, linkedSignal, inject } from '@angular/core';
import { ListAnime } from '../../components/list-anime/list-anime';
import { animeListResource } from '../../helpers/resource';
import { AnimeListParams } from '../../types';
import { disabled, form, FormField, submit } from '@angular/forms/signals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-anime-page',
  imports: [ListAnime, FormField],
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
          queryParams: form().value(),
          replaceUrl: true
        })
    )
  }

  protected clearSearch(): void {
    this.form.q().value.set('');
    this.onSearch()
  }
}
