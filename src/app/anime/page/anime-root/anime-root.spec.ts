import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeRoot } from './anime-root';

describe('AnimeRoot', () => {
  let component: AnimeRoot;
  let fixture: ComponentFixture<AnimeRoot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeRoot],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimeRoot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
