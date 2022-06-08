import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreaCategoriaPageRoutingModule } from './crea-categoria-routing.module';

import { CreaCategoriaPage } from './crea-categoria.page';

import { BenvenutoModule } from 'src/app/components/benvenuto/benvenuto.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreaCategoriaPageRoutingModule,
    NavbarModule,
    FooterModule,
    BenvenutoModule
  ],
  declarations: [CreaCategoriaPage]
})
export class CreaCategoriaPageModule {}
