import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BenvenutoService } from 'src/app/components/benvenuto/benvenuto.service';
import { UserDTO } from 'src/app/models/user/user-dto';
import { CreaAutoriService } from '../../autori/crea-autori/crea-autori.service';


@Component({
  selector: 'app-crea-autori',
  templateUrl: './crea-autori.page.html',
  styleUrls: ['./crea-autori.page.scss'],
})
export class CreaAutoriPage implements OnInit {

  utenteLoggato:UserDTO=new UserDTO;

  name: string;
  surname: string;

  disabilita: boolean = false;

  formLogin;

  tipo: string = "password";
  eye: string = "lock-open-sharp";

  eventoDiClick(): void{
    
    if (!this.disabilita) {
      
      this.creaUtente();

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

  creaUtente() {
    
    this.user.creaAutore(this.name, this.surname).subscribe(resp => {
        
      console.log("Entra");

      const data: UserDTO = resp;

      console.log(data);

      this.reset();

      alert("È stato aggiunto " + data.name + " " + data.surname + "!");
      
    }, error => {
      //grazie al nostro fratellino indiano
      alert("Si è verificato un errore");
    })

  }

  reset() {
    
    this.name = "";
    this.surname = "";

  }

  constructor(private fb:FormBuilder, private user: CreaAutoriService, private zone: NgZone, private utente:BenvenutoService,
    private id:ActivatedRoute) { }

  ngOnInit() {
    this.utente.mostraUtente(this.id).subscribe(resp=>{
      this.utenteLoggato=resp;
    })
  }

}
