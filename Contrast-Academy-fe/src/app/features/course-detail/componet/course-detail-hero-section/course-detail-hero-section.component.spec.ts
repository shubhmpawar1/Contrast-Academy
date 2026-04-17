import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailHeroSectionComponent } from './course-detail-hero-section.component';

describe('CourseDetailHeroSectionComponent', () => {
  let component: CourseDetailHeroSectionComponent;
  let fixture: ComponentFixture<CourseDetailHeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseDetailHeroSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDetailHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
