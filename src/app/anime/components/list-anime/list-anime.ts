import { Component, input } from '@angular/core';
import { Anime } from '../../types';

@Component({
  selector: 'app-list-anime',
  imports: [],
  templateUrl: './list-anime.html',
  styleUrl: './list-anime.scss',
})
export class ListAnime {
  readonly data = input.required<readonly Anime[]>();
}
