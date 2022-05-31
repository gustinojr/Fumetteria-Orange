import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card-carosello',
  templateUrl: './card-carosello.component.html',
  styleUrls: ['./card-carosello.component.scss'],
})
export class CardCaroselloComponent implements OnInit {

 @Input() fumetto;

  
  constructor() { }

  ngOnInit() {}

}
