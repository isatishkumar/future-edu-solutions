import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './components/header/header.component';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';
import { CenterMainComponent } from './components/center-main/center-main.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatRippleModule} from '@angular/material/core';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    CenterMainComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatRippleModule
  ]
})
export class HomeModule { }
