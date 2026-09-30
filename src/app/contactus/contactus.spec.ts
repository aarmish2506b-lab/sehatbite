import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CONTACTUS } from './contactus';

describe('CONTACTUS', () => {
  let component: CONTACTUS;
  let fixture: ComponentFixture<CONTACTUS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CONTACTUS]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CONTACTUS);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
