import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-anime-root',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './anime-root.html',
  styleUrl: './anime-root.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeRoot {}
