import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABOUTUS } from './aboutus';

describe('ABOUTUS', () => {
  let component: ABOUTUS;
  let fixture: ComponentFixture<ABOUTUS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ABOUTUS]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ABOUTUS);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
