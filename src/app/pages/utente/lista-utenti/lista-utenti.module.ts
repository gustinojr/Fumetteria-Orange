import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaUtentiPageRoutingModule } from './lista-utenti-routing.module';

import { ListaUtentiPage } from './lista-utenti.page';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { BenvenutoModule } from 'src/app/components/benvenuto/benvenuto.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaUtentiPageRoutingModule,
    ReactiveFormsModule,
    NavbarModule,
    FooterModule,
    BenvenutoModule
  ],
  declarations: [ListaUtentiPage]
})
export class ListaUtentiPageModule {}
