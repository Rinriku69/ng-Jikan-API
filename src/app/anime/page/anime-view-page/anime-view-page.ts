import { Component, input } from '@angular/core';
import { animeViewResource, getAnimeCharacter } from '../../helpers/resource';
import { AnimeView } from '../../components/anime-view/anime-view';

@Component({
  selector: 'app-anime-view-page',
  imports: [AnimeView],
  templateUrl: './anime-view-page.html',
  styleUrl: './anime-view-page.scss',
})
export class AnimeViewPage {
  readonly id = input.required<string>();
  readonly resource = animeViewResource(() => this.id());
  readonly characterResource = getAnimeCharacter(() => this.id());
}
