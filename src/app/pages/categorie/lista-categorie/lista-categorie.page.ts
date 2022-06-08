import { Component, OnInit } from '@angular/core';
import { List, CategoriaListDTO } from 'src/app/models/categoria/categoria-dto';
import { ListaCategorieService } from './lista-categorie.service';

@Component({
  selector: 'app-lista-categorie',
  templateUrl: './lista-categorie.page.html',
  styleUrls: ['./lista-categorie.page.scss'],
})
export class ListaCategoriePage implements OnInit {

  data: CategoriaListDTO;

  id: number = null;
  nome: string = "";
  description: string = "";

  lastID: number = null;
  lastNome: string = "";
  lastDescription: string = "";

  cerca: boolean[] = [];

  pagina: boolean = true;

  tipo: string = "password";
  eye: string = "lock-open-sharp";
  disabilita: boolean = false;

  esiste: boolean[] = [];

  popup: boolean = false;
  popupElimina: boolean = false;

  attivo: boolean = false;

  constructor(private category : ListaCategorieService) { }

  reset() {

    this.nome = "";
    this.description = "";

    this.stampa();
    this.search();

  }

  ngOnInit() {

    this.stampa();

  }

  stampa() {
    
    this.category.stampaCategorie().subscribe(res => {
        
      this.data = res;
      
      this.search();
      this.esistono();
      
      this.attivo = true;
        
      })

  }

  search() {

    for (let i = 0; i < this.data.list.length; i++){

      if ((this.data.list[i].name.toUpperCase().includes(this.nome.toUpperCase()) && this.data.list[i].description.toUpperCase().includes(this.description.toUpperCase())) || (this.nome == "" && this.description == ""))
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

  cambiaVisione(nome: string, description: string, id: number) {
    
    this.cambiaPagina();

    this.nome = nome;
    this.description = description;
    this.id = id;

  }

  cambiaPagina() {
    
    if(this.pagina == true)
      this.pagina = false;
    else {
      
      this.id= null;
      this.nome = "";
      this.description = "";

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

  updateCategoria() {

    this.category.updateCategorie(this.id, this.nome, this.description).subscribe(resp => {
        
      console.log("Entra");

      const data: List = resp;

      console.log(data);

      alert("È stato fatto l'update di " + data.name + "!");
      
    }, error => {
      //grazie al nostro fratellino indiano
      alert("Si è verificato un errore");
    })

  }

  elimina() {
    
    this.category.eliminaCategorie(this.lastID).subscribe(resp => {

      console.log(resp);

      const data: List = resp;

      this.mandaPopupElimina(false);

      this.reset();

      //alert("È stato eliminato l'utente " + data.name + " " + data.surname + ", " + data.email + "!");
      
    }, error => {
      //grazie al nostro fratellino indiano
      this.mandaPopup(this.lastID, this.nome, this.description);
      alert("Si è verificato un errore durante l'eliminazione dell'utente");
    })

    //this.esiste[i] = false;

  }

  mandaPopup(id: number, name: string, description: string) {
    
    if (!this.popup) {

      this.popup = true;
      this.lastID = id;
      this.lastNome = name;
      this.description = description;

    }
    else {
      
      this.popup = false;
      this.lastID = null;
      this.lastNome = "";
      this.description = "";

    }
      

  }

  mandaPopupElimina(opt: boolean) {

    if (opt) {
     
      this.mandaPopup(this.id, this.nome, this.description);
      this.popupElimina = false;

    }
    else {
      
      this.popupElimina = true;

    }
      

  }

  annulla() {
    
    this.mandaPopup(this.id, this.nome, this.description);
    this.reset();

  }

}
