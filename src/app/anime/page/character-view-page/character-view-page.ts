import { Component, input } from '@angular/core';
import { getCharacter } from '../../helpers/resource';
import { CharacterView } from '../../components/character-view/character-view';

@Component({
  selector: 'app-character-view-page',
  imports: [CharacterView],
  templateUrl: './character-view-page.html',
  styleUrl: './character-view-page.scss',
})
export class CharacterViewPage {
  readonly id = input.required<string>()
  readonly resource = getCharacter(() => this.id())
}
