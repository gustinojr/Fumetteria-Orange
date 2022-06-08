import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaFumettiPageRoutingModule } from './lista-fumetti-routing.module';

import { ListaFumettiPage } from './lista-fumetti.page';
import { BenvenutoModule } from 'src/app/components/benvenuto/benvenuto.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaFumettiPageRoutingModule,
    NavbarModule,
    FooterModule,
    BenvenutoModule
  ],
  declarations: [ListaFumettiPage]
})
export class ListaFumettiPageModule {}
