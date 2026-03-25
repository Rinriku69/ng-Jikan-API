import { Component, effect, input, signal } from '@angular/core';
import { Anime } from '../../types';
import { JsonPipe } from '@angular/common';
import { AnimeCharacter, CharacterBasic } from '../../type/jikan/character';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-anime-view',
  imports: [RouterLink],
  templateUrl: './anime-view.html',
  styleUrl: './anime-view.scss',
})
export class AnimeView {
  readonly data = input.required<Anime>();
  readonly characters = input.required<Readonly<AnimeCharacter[]>>();
  loadMore = signal<boolean>(false);

  toggleLoadMore() {
    this.loadMore.set(!this.loadMore())
  }

  constructor() {
    effect(() => console.log(this.loadMore()))
  }
}
