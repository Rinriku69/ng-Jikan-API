import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { AnimeRoot } from '../anime-root/anime-root';
import { ListAnime } from '../../components/list-anime/list-anime';
import { animeListResource } from '../../helpers/resource';

@Component({
  selector: 'app-list-anime-page',
  imports: [AnimeRoot, ListAnime],
  templateUrl: './list-anime-page.html',
  styleUrl: './list-anime-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListAnimePage {
    protected readonly currentPage = signal(1);

    protected readonly resource = animeListResource(() => ({
      page: this.currentPage(),
    }));
}
