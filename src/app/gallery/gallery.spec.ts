import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GALLERY } from './gallery';

describe('GALLERY', () => {
  let component: GALLERY;
  let fixture: ComponentFixture<GALLERY>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GALLERY]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GALLERY);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
