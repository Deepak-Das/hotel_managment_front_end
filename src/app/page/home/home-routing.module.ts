import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HcontentComponent } from './components/hcontent/hcontent.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [{
  path:'',

  component:HomeComponent,
  children:[
    {
      path:'',
      component:HcontentComponent
    },
    {
      path:"login",
      component:LoginComponent
    },
    {
      path:"register",
      component:RegisterComponent
    }
  ]
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
