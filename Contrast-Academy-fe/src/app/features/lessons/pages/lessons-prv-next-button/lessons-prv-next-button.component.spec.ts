import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsPrvNextButtonComponent } from './lessons-prv-next-button.component';

describe('LessonsPrvNextButtonComponent', () => {
  let component: LessonsPrvNextButtonComponent;
  let fixture: ComponentFixture<LessonsPrvNextButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonsPrvNextButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonsPrvNextButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
