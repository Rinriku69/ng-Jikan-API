import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AnimeRoot } from '../anime-root/anime-root';

@Component({
  selector: 'app-top-anime-page',
  imports: [AnimeRoot],
  templateUrl: './top-anime-page.html',
  styleUrl: './top-anime-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopAnimePage {

}
