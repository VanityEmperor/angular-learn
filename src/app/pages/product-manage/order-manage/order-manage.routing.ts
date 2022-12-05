import { Routes, RouterModule } from '@angular/router';
import { OrderManageComponent } from './order-manage.component';
const routes: Routes = [
  {  
    path: '', component: OrderManageComponent,
  },
];

export const OrderManageRoutes = RouterModule.forChild(routes);
