import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeView } from './anime-view';

describe('AnimeView', () => {
  let component: AnimeView;
  let fixture: ComponentFixture<AnimeView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeView],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimeView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
