import { Component, NgZone, OnInit } from '@angular/core';
import { CategoriaDTO } from 'src/app/models/categoria/categoria-DTO';
import { CreaCategoriaService } from '../../categorie/crea-categoria/crea-categoria.service';

@Component({
  selector: 'app-crea-categoria',
  templateUrl: './crea-categoria.page.html',
  styleUrls: ['./crea-categoria.page.scss'],
})
export class CreaCategoriaPage implements OnInit {

  name: string;
  description: string;

  disabilita: boolean = false;

  tipo: string = "password";
  eye: string = "lock-open-sharp";

  eventoDiClick(): void{
    
    if (!this.disabilita) {
      
      this.creaUtente();

    }
      
  }

  creaUtente() {
    
    console.log("Entra");

    this.user.creaCategoria(this.name, this.description).subscribe(resp => {

      const data: CategoriaDTO = resp;

      console.log(data);

      this.reset();

      alert("È stato aggiunto " + data.name + "!");
      
    }, error => {
      //grazie al nostro fratellino indiano
      alert("Si è verificato un errore");
    })

  }

  reset() {
    
    this.name = "";
    this.description = "";

  }

  constructor(private user: CreaCategoriaService, private zone: NgZone) { }

  ngOnInit() {
  }

}
