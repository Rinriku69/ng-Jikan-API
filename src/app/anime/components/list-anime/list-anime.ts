import { Component, input } from '@angular/core';
import { Anime } from '../../types';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-anime',
  imports: [RouterLink, RouterModule],
  templateUrl: './list-anime.html',
  styleUrl: './list-anime.scss',
})
export class ListAnime {
  readonly data = input.required<readonly Anime[]>();
}
