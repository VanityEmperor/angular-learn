import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManageComponent } from './product-manage.component';
import { ProductManageRoutes } from './product-manage.routing';

@NgModule({
  imports: [
    CommonModule,
    ProductManageRoutes
  ],
  declarations: [ProductManageComponent]
})
export class ProductManageModule { }
