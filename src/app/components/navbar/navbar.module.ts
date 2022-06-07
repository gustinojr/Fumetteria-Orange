import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { FormsModule } from '@angular/forms';
import { IonicModule} from '@ionic/angular';
import { PopoverModule } from '../popover/popover.module';




@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverModule
  ],
  exports:[NavbarComponent]
})
export class NavbarModule { }
