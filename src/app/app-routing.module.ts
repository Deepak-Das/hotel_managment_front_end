import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { HomeRoutingModule } from './page/home/home-routing.module';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo:"/home"
    
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./page/home/home-routing.module').then(
        (m) => m.HomeRoutingModule
      ),
     
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
