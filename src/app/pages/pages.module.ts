import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutes } from './pages.routing';
import { ThirdComponent } from './third/third.component';
@NgModule({
  imports: [
    CommonModule,
    PagesRoutes
  ],
  declarations: [PagesComponent,ThirdComponent]
})
export class PagesModule { }
