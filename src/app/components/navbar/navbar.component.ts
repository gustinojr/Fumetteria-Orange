import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UserDTO } from 'src/app/models/user/user-dto';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() nome:string;
  @Input() cognome:string;
  @Input() email:string;
  utenteLoggato:UserDTO=new UserDTO;
isOpen = false;

constructor(private menu: MenuController) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  popOver(){
     this.isOpen = !this.isOpen;
     
  }






ngOnInit() {}
}