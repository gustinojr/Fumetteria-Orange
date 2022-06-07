import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreaUtentePageRoutingModule } from './crea-utente-routing.module';

import { CreaUtentePage } from './crea-utente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreaUtentePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreaUtentePage]
})
export class CreaUtentePageModule {}
