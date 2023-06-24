import { NgModule  ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HbodyComponent } from './components/hbody/hbody.component';
import {MatIconModule} from '@angular/material/icon';
import { FeatureimageComponent } from './components/featureimage/featureimage.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HbodyComponent,
    FeatureimageComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule
  ],
})
export class HomeModule { }
