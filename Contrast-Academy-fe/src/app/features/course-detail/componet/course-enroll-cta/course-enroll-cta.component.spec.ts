import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEnrollCTAComponent } from './course-enroll-cta.component';

describe('CourseEnrollCTAComponent', () => {
  let component: CourseEnrollCTAComponent;
  let fixture: ComponentFixture<CourseEnrollCTAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseEnrollCTAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseEnrollCTAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
