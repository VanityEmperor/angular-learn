import { Routes, RouterModule } from '@angular/router';
import { ProductManageComponent } from './product-manage.component';
import { ProductListComponent } from './product-list/product-list.component';
const routes: Routes = [
  { path: '', component: ProductManageComponent,},
  { path: 'productList', component: ProductListComponent,},
];

export const ProductManageRoutes = RouterModule.forChild(routes);
