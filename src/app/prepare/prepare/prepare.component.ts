import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Logger, PrismService, QuestionService, SyncScoreService } from '@app/core/services';
import { Question } from '@app/core/models';
import { IScore } from '@app/core/interfaces';

const log = new Logger('PrepareComponent');

@Component({
  selector: 'app-prepare',
  templateUrl: './prepare.component.html'
})
export class PrepareComponent implements OnInit, AfterViewChecked, OnDestroy {
  public isCorrect: boolean = false;
  public btnText: string;
  private question: Question;
  private score: IScore;
  private interval: any;
  private isNew: boolean;
  private highlighted: boolean;
  private unsubscribe$: Subject<boolean> = new Subject<boolean>();

  get currentQuestion(): Question {
    return this.question;
  }

  constructor(
    private ngxUiLoaderService: NgxUiLoaderService,
    private prismService: PrismService,
    private questionService: QuestionService,
    private syncScoreService: SyncScoreService
  ) {
  }

  ngOnInit(): void {
    this.syncScoreService.currentValue
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        score => this.score = score,
        error => log.error(error)
      );
    this.getRandomQuestion();
  }

  ngAfterViewChecked(): void {
    if (this.isNew && !this.highlighted) {
      this.prismService.highlightAll();
      this.highlighted = true;
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public onValidate(countDown: number = 10): void {
    this.isCorrect = this.question.validate(true);
    this.syncScoreService.setValue(this.updateScore(this.isCorrect));
    const ansType = this.isCorrect ? 'Correct' : 'Wrong';
    this.btnText = `${ansType} [new quiz in ${countDown} seconds]`;

    this.interval = setInterval(() => {
      countDown--;
      if (countDown === 1) {
        this.btnText = `${ansType} [new quiz in ${countDown} second] or push to get it now`;
      } else {
        this.btnText = `${ansType} [new quiz in ${countDown} seconds] or push to get it now`;
      }

      if (countDown === 0) {
        this.getRandomQuestion();
      }
    }, 1000);
  }

  private getRandomQuestion(): void {
    this.reset();
    this.questionService
      .getQuestion(1)
      .pipe(take(1))
      .subscribe(
        question => this.question = question,
        error => log.error(error),
        () => {
          this.isNew = true;
          setTimeout(() => this.ngxUiLoaderService.stopAll(), 250);
        }
      );
  }

  private reset(): void {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    this.ngxUiLoaderService.start();
    this.isNew = false;
    this.highlighted = false;
    this.isCorrect = false;
    this.btnText = 'Get next question now ';
    this.question = new Question();
  }

  private updateScore(isCorrect: boolean): IScore {
    this.score = this.syncScoreService.getValue();
    ++this.score.total;
    if (isCorrect) {
      ++this.score.correct;
    }
    this.score.percentage = Math.floor((this.score.correct * 100) / this.score.total);

    return this.score;
  }
}
