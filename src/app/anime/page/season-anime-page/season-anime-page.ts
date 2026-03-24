import { Component, signal } from '@angular/core';
import { currentSeasonAnimeResource } from '../../helpers/resource';
import { ListAnime } from '../../components/list-anime/list-anime';

@Component({
  selector: 'app-season-anime-page',
  imports: [ListAnime],
  templateUrl: './season-anime-page.html',
  styleUrl: './season-anime-page.scss',
})
export class SeasonAnimePage {
  protected readonly currentPage = signal(1);

  protected readonly resource = currentSeasonAnimeResource(() => ({
    page: this.currentPage(),
  }));
}
