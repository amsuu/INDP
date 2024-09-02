import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level2QuizQuestionComponent } from './level-2-quiz-question.component';

describe('Level2QuizQuestionComponent', () => {
  let component: Level2QuizQuestionComponent;
  let fixture: ComponentFixture<Level2QuizQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Level2QuizQuestionComponent]
    });
    fixture = TestBed.createComponent(Level2QuizQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
