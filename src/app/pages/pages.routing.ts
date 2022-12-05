import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ThirdComponent } from './third/third.component';
import { FourComponent } from './four/four.component';
const routes: Routes = [
  {  
    path: '',
    component: PagesComponent,
    children:[
      { 
        path: 'four',
        component: FourComponent,
      },
    ]
  },
  {  
    path: 'third',
    component: ThirdComponent,
  },
];

export const PagesRoutes = RouterModule.forChild(routes);
