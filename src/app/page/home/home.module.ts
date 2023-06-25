import { NgModule  ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import { FeatureimageComponent } from './components/featureimage/featureimage.component';
import { ArticalComponent } from './components/artical/artical.component';
import { HbFormComponent } from './components/hb-form/hb-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';





@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FeatureimageComponent,
    ArticalComponent,
    HbFormComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatSelectModule,
  ],
})
export class HomeModule { }
