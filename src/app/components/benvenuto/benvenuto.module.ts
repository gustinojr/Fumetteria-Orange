import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BenvenutoComponent } from './benvenuto.component';



@NgModule({
  declarations: [BenvenutoComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports:[BenvenutoComponent]
})
export class BenvenutoModule { }
