import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonAnimePage } from './season-anime-page';

describe('SeasonAnimePage', () => {
  let component: SeasonAnimePage;
  let fixture: ComponentFixture<SeasonAnimePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeasonAnimePage],
    }).compileComponents();

    fixture = TestBed.createComponent(SeasonAnimePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
