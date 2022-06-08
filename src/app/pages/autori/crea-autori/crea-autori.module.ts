import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreaAutoriPage } from './crea-autori.page';
import { CreaAutoriPageRoutingModule } from '../../autori/crea-autori/crea-autori-routing.module';
import { BenvenutoModule } from 'src/app/components/benvenuto/benvenuto.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreaAutoriPageRoutingModule,
    ReactiveFormsModule,
    NavbarModule,
    FooterModule,
    BenvenutoModule
  ],
  declarations: [CreaAutoriPage]
})
export class CreaAutoriPageModule {}
