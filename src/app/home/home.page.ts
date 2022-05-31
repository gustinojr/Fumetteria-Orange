import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaService } from '../home.service';
import { ListaFumettiDto } from '../models/DTO/lista-dto';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

fumetti:ListaFumettiDto;
 sliderConfig = {
  spaceBetween: 10,
  centeredSlides: true,
  slidesPerView:1.6
};

  constructor(private service:ListaService, private router:Router) {
    this.fumetti=new ListaFumettiDto;
  }

  ngOnInit() {
    this.service.listaFumetti().subscribe((resp) => {
      this.fumetti = resp;
    });
  }
}
