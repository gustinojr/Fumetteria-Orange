import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { BenvenutoModule } from 'src/app/components/benvenuto/benvenuto.module';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NavbarModule,
    FooterModule,
    BenvenutoModule
    
  ],
  declarations: [HomePage,]
})
export class HomePageModule {}
