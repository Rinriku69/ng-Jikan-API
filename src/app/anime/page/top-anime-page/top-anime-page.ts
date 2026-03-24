import { Component, ChangeDetectionStrategy, computed, input } from '@angular/core';
import { topAnimeResource } from '../../helpers/resource';
import { AnimeListParams } from '../../types';
import { TopAnimeList } from '../../components/top-anime-list/top-anime-list';

@Component({
  selector: 'app-top-anime-page',
  imports: [TopAnimeList],
  templateUrl: './top-anime-page.html',
  styleUrl: './top-anime-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopAnimePage {
  readonly page = input<string>();
  private readonly params = computed<AnimeListParams>(() => ({
    page: this.page() ?? ''
  }))

  readonly resource = topAnimeResource(() => this.params());
}
