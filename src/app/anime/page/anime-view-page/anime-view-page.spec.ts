import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeViewPage } from './anime-view-page';

describe('AnimeViewPage', () => {
  let component: AnimeViewPage;
  let fixture: ComponentFixture<AnimeViewPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeViewPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimeViewPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
