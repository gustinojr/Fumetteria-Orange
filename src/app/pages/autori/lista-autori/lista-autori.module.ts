import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaAutoriPageRoutingModule } from './lista-autori-routing.module';

import { ListaAutoriPage } from './lista-autori.page';
import { BenvenutoModule } from 'src/app/components/benvenuto/benvenuto.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaAutoriPageRoutingModule,
    ReactiveFormsModule,
    NavbarModule,
    FooterModule,
    BenvenutoModule
  ],
  declarations: [ListaAutoriPage]
})
export class ListaAutoriPageModule {}
