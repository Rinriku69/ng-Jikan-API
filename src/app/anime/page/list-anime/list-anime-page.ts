import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AnimeRoot } from '../anime-root/anime-root';
import { httpResource } from '@angular/common/http';
import { JikanAnimeListResponse } from '../../types';

@Component({
  selector: 'app-list-anime-page',
  imports: [AnimeRoot],
  templateUrl: './list-anime-page.html',
  styleUrl: './list-anime-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListAnimePage {
    protected readonly resource = httpResource<JikanAnimeListResponse>(() => ({
      url: 'https://api.jikan.moe/v4/anime',
    }));
}
