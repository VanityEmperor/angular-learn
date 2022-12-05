import { Routes, RouterModule } from '@angular/router';
import { ProductManageComponent } from './product-manage.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
const routes: Routes = [
  { path: '', component: ProductManageComponent,},
  { path: 'productList', component: ProductListComponent,},
  { path: 'productDetail', component: ProductDetailComponent,},
];

export const ProductManageRoutes = RouterModule.forChild(routes);
