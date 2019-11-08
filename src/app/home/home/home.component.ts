import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PdfService } from '@app/core/services/pdf/pdf.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  folders = [
    { name: 'Folder 1', link: '#1' },
    { name: 'Folder 2', link: '#2' },
    { name: 'Folder 3', link: '#3' },
    { name: 'Folder 4', link: '#4' },
    { name: 'Folder 5', link: '#5' }
  ];

  responsive = true;
  cols = 1;

  constructor(
    public pdfService: PdfService
  ) {
  }
}
