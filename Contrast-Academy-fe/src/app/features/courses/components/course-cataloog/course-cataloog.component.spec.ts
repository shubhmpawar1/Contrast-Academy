import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCataloogComponent } from './course-cataloog.component';

describe('CourseCataloogComponent', () => {
  let component: CourseCataloogComponent;
  let fixture: ComponentFixture<CourseCataloogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCataloogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCataloogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
