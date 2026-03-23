import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAnimeView } from './top-anime-view';

describe('TopAnimeView', () => {
  let component: TopAnimeView;
  let fixture: ComponentFixture<TopAnimeView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopAnimeView],
    }).compileComponents();

    fixture = TestBed.createComponent(TopAnimeView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
