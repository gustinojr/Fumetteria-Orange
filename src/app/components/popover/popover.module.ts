import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverComponent } from './popover.component';


@NgModule({
  declarations: [PopoverComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports:[PopoverComponent]
})
export class PopoverModule { }

