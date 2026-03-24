import { Component, input } from '@angular/core';
import { Anime } from '../../types';

@Component({
  selector: 'app-anime-view',
  imports: [],
  templateUrl: './anime-view.html',
  styleUrl: './anime-view.scss',
})
export class AnimeView {
  readonly data = input.required<Anime>();
}
