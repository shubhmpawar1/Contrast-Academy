import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsQuickQuizComponent } from './lessons-quick-quiz.component';

describe('LessonsQuickQuizComponent', () => {
  let component: LessonsQuickQuizComponent;
  let fixture: ComponentFixture<LessonsQuickQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonsQuickQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonsQuickQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
