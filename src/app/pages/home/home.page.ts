import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs';
import { BenvenutoService } from 'src/app/components/benvenuto/benvenuto.service';
import { AuthorListDTO } from 'src/app/models/autori/author-dto';
import { CategoriaListDTO } from 'src/app/models/categoria/categoria-DTO';
import { FumettiDto } from 'src/app/models/DTO/fumetti-dto';
import { UserDTO } from 'src/app/models/user/user-dto';
import { ListaService } from '../../home.service';
import { ListaFumettiDto } from '../../models/DTO/lista-dto';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 
  utenteLoggato:UserDTO=new UserDTO;

  bottom = false;
  top = true;

  data: ListaFumettiDto;
  dataCategoria: CategoriaListDTO;
  dataAutore: AuthorListDTO;

  // nome: string = "";
  // description: string = "";
  // type: string = "";
  // authorName: string = "";
  // authorSurname: string = "";
  // category: string = "";
  // id: string = "";
  // authorID: number = null;
  // categoryID: number = null;


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

  constructor(private service: ListaService, private router: Router, private utente:BenvenutoService,
    private id:ActivatedRoute) {
    this.data = new ListaFumettiDto;
  }

  ngOnInit() {
    this.service.listaFumetti().subscribe((resp) => {
      this.data = resp;
    });


    this.utente.mostraUtente(this.id).subscribe(resp=>{
      this.utenteLoggato=resp;
    })
  }
}
