import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { Anime } from '../../types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-anime-list',
  imports: [RouterLink],
  templateUrl: './top-anime-list.html',
  styleUrl: './top-anime-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopAnimeList {
  readonly data = input.required<readonly Anime[]>();
}
