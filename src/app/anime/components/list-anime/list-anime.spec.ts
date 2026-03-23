import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnime } from './list-anime';

describe('ListAnime', () => {
  let component: ListAnime;
  let fixture: ComponentFixture<ListAnime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAnime],
    }).compileComponents();

    fixture = TestBed.createComponent(ListAnime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
