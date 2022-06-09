import { Component, NgZone, OnInit } from '@angular/core';
import { CreaFumettoService } from './crea-fumetto.service';
import { FumettiDto } from 'src/app/models/DTO/fumetti-DTO';
import { CategoriaListDTO } from 'src/app/models/categoria/categoria-DTO';
import { AuthorListDTO } from 'src/app/models/autori/author-dto';

@Component({
  selector: 'app-crea-fumetto',
  templateUrl: './crea-fumetto.page.html',
  styleUrls: ['./crea-fumetto.page.scss'],
})
export class CreaFumettoPage implements OnInit {

  dataCategoria: CategoriaListDTO;
  dataAutore: AuthorListDTO;

  name: string;
  description: string;
  type: string;
  authorID: number;
  categoryID: number;

  disabilita: boolean = false;

  tipo: string = "password";
  eye: string = "lock-open-sharp";

  eventoDiClick(): void{
    
    if (!this.disabilita) {
      
      this.creaFumetto();

    }
      
  }

  creaFumetto() {
    
    console.log("Entra");

    this.comic.creaFumetto(this.name, this.description, this.type, this.authorID , this.categoryID).subscribe(resp => {

      const data: FumettiDto = resp;

      console.log(data);

      this.reset();

      alert("È stato aggiunto " + data.name + "!");
      
    }, error => {
      //grazie al nostro fratellino indiano
      alert("Si è verificato un errore nella creazione del fumetto.");
    })

  }

  reset() {
    
    this.name = "";
    this.description = "";
    this.type = "";
    this.authorID = null;
    this.categoryID = null;

  }

  stampaCategorie() {
    
    this.comic.stampaCategorie().subscribe(res => {
        
      this.dataCategoria = res;

      // alert("Categoria: " + this.dataCategoria.list[0].name);
        
      })

  }

  stampaAutori() {
    
    this.comic.stampaAutori().subscribe(res => {
        
      this.dataAutore = res;

      // alert("Autore: " + this.dataCategoria.list[0].name);
        
      })

  }

  cambiaAutore(event) {

    this.authorID = event.value;

  }

  cambiaCategoria(event) {
    
    this.categoryID = event.value;

  }

  constructor(private comic: CreaFumettoService, private zone: NgZone) { }

  ngOnInit() {

    this.stampaAutori();
    this.stampaCategorie();

  }

}