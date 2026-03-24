import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAnimeList } from './top-anime-list';

describe('TopAnimeList', () => {
  let component: TopAnimeList;
  let fixture: ComponentFixture<TopAnimeList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopAnimeList],
    }).compileComponents();

    fixture = TestBed.createComponent(TopAnimeList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
