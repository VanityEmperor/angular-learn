import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: '', redirectTo: 'second', pathMatch: 'full' },
  { path: 'helloWorld', component: HelloWorldComponent },
  { path: 'second', component: SecondComponent },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
