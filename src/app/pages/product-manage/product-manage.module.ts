import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManageComponent } from './product-manage.component';
import { ProductManageRoutes } from './product-manage.routing';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [
    CommonModule,
    ProductManageRoutes
  ],
  declarations: [ProductManageComponent,ProductListComponent]
})
export class ProductManageModule { }
