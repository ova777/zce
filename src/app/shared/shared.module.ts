import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { SimpleModalModule } from 'ngx-simple-modal';
import { ConfirmComponent } from './confirm/confirm.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QuestionDisplayComponent } from '@app/question-display/question-display.component';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatSliderModule } from '@angular/material/';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';


@NgModule({
  declarations: [
    ConfirmComponent,
    QuestionDisplayComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgxUiLoaderModule.forRoot({
      bgsColor: '#00ACC1',
      bgsOpacity: 0.5,
      bgsPosition: 'center-center',
      bgsSize: 60,
      bgsType: 'rectangle-bounce-pulse-out',
      blur: 5,
      fgsColor: '#bc75ea',
      fgsPosition: 'center-center',
      fgsSize: 100,
      fgsType: 'cube-grid',
      gap: 24,
      logoPosition: 'center-center',
      logoSize: 120,
      logoUrl: '',
      masterLoaderId: 'master',
      overlayBorderRadius: '0',
      overlayColor: 'rgba(40, 40, 40, 0.8)',
      pbColor: '#00ACC1',
      pbDirection: 'ltr',
      pbThickness: 3,
      hasProgressBar: true,
      text: 'loading ...',
      textColor: '#FFFFFF',
      textPosition: 'center-center'
    }),
    SimpleModalModule.forRoot({container: document.body}),

    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatCardModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatDividerModule,
  ],
  entryComponents: [
    ConfirmComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    PageNotFoundComponent,
    NgxUiLoaderModule,
    ConfirmComponent,
    QuestionDisplayComponent,

    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    MatChipsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ]
})
export class SharedModule {
}
