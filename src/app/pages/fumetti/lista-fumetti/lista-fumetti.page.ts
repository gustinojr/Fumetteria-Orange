import { Component, OnInit } from '@angular/core';
import { AuthorListDTO, List } from 'src/app/models/autori/author-dto';
import { CategoriaListDTO } from 'src/app/models/categoria/categoria-DTO';
import { FumettiDto, ListaFumettiDto } from 'src/app/models/DTO/fumetti-dto';
import { ListaFumettiService } from './lista-fumetti.service';

@Component({
  selector: 'app-lista-fumetti',
  templateUrl: './lista-fumetti.page.html',
  styleUrls: ['./lista-fumetti.page.scss'],
})
export class ListaFumettiPage implements OnInit {

  data: ListaFumettiDto;
  dataCategoria: CategoriaListDTO;
  dataAutore: AuthorListDTO;

  nome: string = "";
  description: string = "";
  type: string = "";
  authorName: string = "";
  authorSurname: string = "";
  category: string = "";
  id: string = "";
  authorID: number = null;
  categoryID: number = null;

  lastNome: string = "";
  lastDescription: string = "";
  lastType: string = "";
  lastAuthorName: string = "";
  lastAuthorSurname: string = "";
  lastCategory: string = "";
  lastID: string = "";
  lastAuthorID: number = null;
  lastCategoryID: number = null;

  cerca: boolean[] = [];

  pagina: boolean = true;

  tipo: string = "password";
  eye: string = "lock-open-sharp";
  disabilita: boolean = false;

  esiste: boolean[] = [];

  popup: boolean = false;
  popupElimina: boolean = false;

  attivo: boolean = false;

  constructor(private comic : ListaFumettiService) { }

  reset() {

    this.id= "";
    this.nome = "";
    this.description = "";
    this.type = "";
    this.authorID = null;
    this.authorName = "";
    this.authorSurname = "";
    this.categoryID = null;
    this.category = "";

    this.stampa();
    this.search();

  }

  ngOnInit() {

    this.stampa();
    this.stampaAutori();
    this.stampaCategorie();

  }

  stampa() {
    
    this.comic.stampaFumetti().subscribe(res => {
        
      this.data = res;
      
      this.search();
      this.esistono();
      
      this.attivo = true;
        
      })
    
  }

  search() {

    for (let i = 0; i < this.data.list.length; i++){

      if (this.data.list[i].name.toUpperCase().includes(this.nome.toUpperCase()) || (this.nome == ""))
        this.cerca[i] = true;
      else
        this.cerca[i] = false;

    }

  }
  
  esistono() {

    for (let i = 0; i < this.data.list.length; i++){

      this.esiste[i] = true;

    }

  }

  cambiaVisione(nome: string, description: string, type: string, authorID: number , authorName: string, authorSurname: string , categoryID: number , category: string, id: string) {
    
    this.cambiaPagina();

    this.nome = nome;
    this.description = description;
    this.type = type;
    this.authorID = authorID;
    this.authorName = authorName;
    this.authorSurname = authorSurname;
    this.categoryID = categoryID;
    this.category = category;
    this.id = id;

  }

  cambiaPagina() {
    
    if(this.pagina == true)
      this.pagina = false;
    else {
      
      this.id= "";
      this.nome = "";
      this.description = "";
      this.type = "";
      this.authorID = null;
      this.authorName = "";
      this.authorSurname = "";
      this.categoryID = null;
      this.category = "";

      this.pagina = true;

    }
      

  }

  cambioTipo(): void{
    
    if (this.tipo == "password") {
      
      this.tipo = "";
      this.eye = "eye-outline";

    }
    else {
      
      this.tipo = "password";
      this.eye = "eye-off-outline";

    }

  }

  updateFumetto() {

    // alert(this.authorID + " " + this.categoryID);

    this.comic.updateFumetti(this.id, this.nome, this.description, this.type, this.authorID , this.categoryID).subscribe(resp => {
        
      const data: ListaFumettiDto = resp;

      console.log(data);

      alert("È stato fatto l'update di " + this.nome + "!");
      
    }, error => {
      //grazie al nostro fratellino indiano
      alert("Si è verificato un errore nell'update del fumetto.");
    })

  }

  elimina() {
    
    this.comic.eliminaFumetti(this.lastID).subscribe(resp => {

      console.log(resp);

      const data: ListaFumettiDto = resp;

      this.mandaPopupElimina(false);

      this.reset();
      
    }, error => {
      //grazie al nostro fratellino indiano
      this.mandaPopup(this.id, this.nome, this.description, this.type, this.authorID , this.authorName, this.authorSurname, this.categoryID , this.category);
      alert("Si è verificato un errore durante l'eliminazione del fumetto");
    })

  }

  mandaPopup(id: string, nome: string, description: string, type: string, authorID: number , authorName: string, authorSurname: string , categoryID: number , category: string ) {
    
    if (!this.popup) {

      this.popup = true;

      this.lastNome = nome;
      this.lastDescription = description;
      this.lastType = type;
      this.authorID = authorID;
      this.lastAuthorName = authorName;
      this.lastAuthorSurname = authorSurname;
      this.categoryID = categoryID
      this.lastCategory = category;
      this.lastID = id;

    }
    else {
      
      this.popup = false;

      this.lastNome = "";
      this.lastDescription = "";
      this.lastType = "";
      this.authorID = null;
      this.lastAuthorName = "";
      this.lastAuthorSurname = "";
      this.categoryID = null;
      this.lastCategory = "";
      this.lastID = "";

    }
      

  }

  mandaPopupElimina(opt: boolean) {

    if (opt) {
     
      this.mandaPopup(this.id, this.nome, this.description, this.type, this.authorID , this.authorName, this.authorSurname, this.categoryID , this.category);
      this.popupElimina = false;

    }
    else {
      
      this.popupElimina = true;

    }
      

  }

  annulla() {
    
    this.mandaPopup(this.id, this.nome, this.description, this.type, this.authorID , this.authorName, this.authorSurname, this.categoryID , this.category);
    this.reset();

  }

  stampaCategorie() {
    
    this.comic.stampaCategorie().subscribe(res => {
        
      this.dataCategoria = res;
      
      this.search();
      this.esistono();
      
      this.attivo = true;
        
      })

  }

  stampaAutori() {
    
    this.comic.stampaAutori().subscribe(res => {
        
      this.dataAutore = res;
      
      this.search();
      this.esistono();
      
      this.attivo = true;
        
      })

  }

  cambiaAutore(event) {

    this.authorID = event.value;

  }

  cambiaCategoria(event) {
    
    this.categoryID = event.value;

  }

}
