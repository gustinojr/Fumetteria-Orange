import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FumettiDto } from 'src/app/models/DTO/fumetti-dto';
import { ListaService } from '../../home.service';
import { ListaFumettiDto } from '../../models/DTO/lista-dto';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  bottom = false;
  top = true;
  fumetti: ListaFumettiDto;

  info =
    [{
    Descrizione: "Descrizione: Questo è un bel fumetto;",
    Genere: "Genere: Comic;",
    Autore: "Autore: Pippo;",
    Categoria: "Categoria: Misc;"
}];

  sliderConfig = {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1.6,
    autoplay: true
  };

  cliccato() {
    this.bottom = !this.bottom;
    this.top = !this.top;
  }

  constructor(private service: ListaService, private router: Router) {
    this.fumetti = new ListaFumettiDto;
  }

  ngOnInit() {
    this.service.listaFumetti().subscribe((resp) => {
      this.fumetti = resp;
    });



  }
}
