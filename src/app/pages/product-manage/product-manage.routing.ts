import { Routes, RouterModule } from '@angular/router';
import { ProductManageComponent } from './product-manage.component';
const routes: Routes = [
  { path: '', component: ProductManageComponent,},
];

export const ProductManageRoutes = RouterModule.forChild(routes);
