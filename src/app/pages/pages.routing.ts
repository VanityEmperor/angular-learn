import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ThirdComponent } from './third/third.component';
const routes: Routes = [
  {  
    path: '',
    component: PagesComponent,
  },
  {  
    path: 'third',
    component: ThirdComponent,
  },
];

export const PagesRoutes = RouterModule.forChild(routes);
