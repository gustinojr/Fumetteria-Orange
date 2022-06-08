import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreaFumettoPageRoutingModule } from './crea-fumetto-routing.module';

import { CreaFumettoPage } from './crea-fumetto.page';
import { BenvenutoModule } from 'src/app/components/benvenuto/benvenuto.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreaFumettoPageRoutingModule,
    NavbarModule,
    FooterModule,
    BenvenutoModule
  ],
  declarations: [CreaFumettoPage]
})
export class CreaFumettoPageModule {}
