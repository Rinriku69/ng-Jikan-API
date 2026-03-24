import { Component, input } from '@angular/core';
import { CharacterFull } from '../../type/jikan/character';

@Component({
  selector: 'app-character-view',
  imports: [],
  templateUrl: './character-view.html',
  styleUrl: './character-view.scss',
})
export class CharacterView {
  readonly data = input.required<CharacterFull>();
}
