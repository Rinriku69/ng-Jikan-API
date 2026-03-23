import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnimePage } from './list-anime-page';

describe('ListAnimePage', () => {
  let component: ListAnimePage;
  let fixture: ComponentFixture<ListAnimePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAnimePage],
    }).compileComponents();

    fixture = TestBed.createComponent(ListAnimePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
