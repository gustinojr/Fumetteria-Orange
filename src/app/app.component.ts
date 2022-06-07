import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  showSubmenu1: boolean = false;
  showSubmenu2: boolean = false;
  showSubmenu3: boolean = false;
  showSubmenu4: boolean = false;
 
  constructor() {}

  ngOnInit() {

  }
}
