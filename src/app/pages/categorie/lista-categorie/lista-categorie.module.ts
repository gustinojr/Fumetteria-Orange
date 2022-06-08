import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaCategoriePageRoutingModule } from './lista-categorie-routing.module';

import { ListaCategoriePage } from './lista-categorie.page';
import { BenvenutoModule } from 'src/app/components/benvenuto/benvenuto.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaCategoriePageRoutingModule,
    NavbarModule,
    FooterModule,
    BenvenutoModule
  ],
  declarations: [ListaCategoriePage]
})
export class ListaCategoriePageModule {}
