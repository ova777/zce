import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about/about.component';
import { SharedModule } from "@app/shared";


@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule {
}
