import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderManageComponent } from './order-manage.component';
import { OrderManageRoutes } from './order-manage.routing';

@NgModule({
  imports: [
    CommonModule,
    OrderManageRoutes
  ],
  declarations: [OrderManageComponent]
})
export class OrderManageModule { }
