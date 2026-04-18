import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsVideoSectionComponent } from './lessons-video-section.component';

describe('LessonsVideoSectionComponent', () => {
  let component: LessonsVideoSectionComponent;
  let fixture: ComponentFixture<LessonsVideoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonsVideoSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonsVideoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
