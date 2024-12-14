import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level1QuizQuestionComponent } from './level-1-quiz-question.component';

describe('Level1QuizQuestionComponent', () => {
  let component: Level1QuizQuestionComponent;
  let fixture: ComponentFixture<Level1QuizQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [Level1QuizQuestionComponent]
});
    fixture = TestBed.createComponent(Level1QuizQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
