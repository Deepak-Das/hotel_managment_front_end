import { NgModule  ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import {MatIconModule} from '@angular/material/icon';

import { HbFormComponent } from './components/hcontent/components/hb-form/hb-form.component';
import { MaterialModule } from 'src/app/common/material/material.module';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';
// import { MatDividerModule } from '@angular/material/divider';
// import {MatSelectModule} from '@angular/material/select';

import { NgIconsModule } from '@ng-icons/core';
import { LoginComponent } from './components/login/login.component';
import { HcontentComponent } from './components/hcontent/hcontent.component';
import { FeatureimageComponent } from './components/hcontent/components/featureimage/featureimage.component';
import { ArticalComponent } from './components/hcontent/components/artical/artical.component';
import { RegisterComponent } from './components/register/register.component';
import { RoomcardComponent } from './components/roomcard/roomcard.component';

import { bootstrapFacebook,bootstrapInstagram,bootstrapLinkedin,bootstrapYoutube, bootstrapGoogle,bootstrapImages } from '@ng-icons/bootstrap-icons';






@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FeatureimageComponent,
    ArticalComponent,
    HbFormComponent,
    LoginComponent,
    HcontentComponent,
    RegisterComponent,
    RoomcardComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    NgIconsModule.withIcons({  bootstrapFacebook,bootstrapInstagram,bootstrapLinkedin,bootstrapYoutube, bootstrapGoogle,bootstrapImages }),    
    
  ],
})
export class HomeModule { }
