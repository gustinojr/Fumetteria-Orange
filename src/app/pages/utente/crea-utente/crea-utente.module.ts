import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreaUtentePageRoutingModule } from './crea-utente-routing.module';

import { CreaUtentePage } from './crea-utente.page';
import { BenvenutoModule } from 'src/app/components/benvenuto/benvenuto.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreaUtentePageRoutingModule,
    ReactiveFormsModule,
    NavbarModule,
    FooterModule,
    BenvenutoModule
  ],
  declarations: [CreaUtentePage]
})
export class CreaUtentePageModule {}
