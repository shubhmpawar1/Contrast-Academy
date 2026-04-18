import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonTaskComponent } from './lesson-task.component';

describe('LessonTaskComponent', () => {
  let component: LessonTaskComponent;
  let fixture: ComponentFixture<LessonTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
