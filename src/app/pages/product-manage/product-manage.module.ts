import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManageComponent } from './product-manage.component';
import { ProductManageRoutes } from './product-manage.routing';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ProductManageRoutes
  ],
  declarations: [ProductManageComponent,ProductListComponent,ProductDetailComponent]
})
export class ProductManageModule { }
