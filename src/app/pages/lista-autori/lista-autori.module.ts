import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaAutoriPageRoutingModule } from './lista-autori-routing.module';

import { ListaAutoriPage } from './lista-autori.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaAutoriPageRoutingModule
  ],
  declarations: [ListaAutoriPage]
})
export class ListaAutoriPageModule {}
