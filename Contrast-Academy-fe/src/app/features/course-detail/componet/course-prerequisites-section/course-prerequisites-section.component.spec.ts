import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePrerequisitesSectionComponent } from './course-prerequisites-section.component';

describe('CoursePrerequisitesSectionComponent', () => {
  let component: CoursePrerequisitesSectionComponent;
  let fixture: ComponentFixture<CoursePrerequisitesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursePrerequisitesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursePrerequisitesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
