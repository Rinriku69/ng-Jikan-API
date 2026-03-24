import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-anime-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './anime-root.html',
  styleUrl: './anime-root.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeRoot { }
