import { Component, computed, input, signal } from '@angular/core';
import { currentSeasonAnimeResource } from '../../helpers/resource';
import { ListAnime } from '../../components/list-anime/list-anime';
import { AnimeListParams } from '../../types';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-season-anime-page',
  imports: [ListAnime, RouterLink, DecimalPipe],
  templateUrl: './season-anime-page.html',
  styleUrl: './season-anime-page.scss',
})
export class SeasonAnimePage {

  readonly page = input<string>();
  private readonly params = computed<AnimeListParams>(() => ({
    page: this.page() ?? ''
  }))

  protected readonly resource = currentSeasonAnimeResource(() => this.params());


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
