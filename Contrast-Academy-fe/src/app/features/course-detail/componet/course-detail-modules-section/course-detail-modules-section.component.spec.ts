import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailModulesSectionComponent } from './course-detail-modules-section.component';

describe('CourseDetailModulesSectionComponent', () => {
  let component: CourseDetailModulesSectionComponent;
  let fixture: ComponentFixture<CourseDetailModulesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseDetailModulesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDetailModulesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
