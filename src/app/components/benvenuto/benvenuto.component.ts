import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-benvenuto',
  templateUrl: './benvenuto.component.html',
  styleUrls: ['./benvenuto.component.scss'],
})
export class BenvenutoComponent implements OnInit {
@Input() nome:string;
@Input() cognome:string;
@Input() email:string;

  constructor() { }

  ngOnInit() {}

}
