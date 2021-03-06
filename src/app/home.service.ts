import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDTO } from './models/user/user-dto';
import { ActivatedRoute } from '@angular/router';
import { UserInfo } from './models/user/user-info';

@Injectable({
  providedIn: 'root'
})

export class ListaService {

  constructor(private http:HttpClient) { }

  mostraUtente(url:ActivatedRoute){
    let utente: UserInfo = new UserInfo
    url.queryParams.subscribe(params => {
    utente.id = params['id'];
    } );
  
    return this.http.get<UserDTO>("http://2.44.173.210:7080/comic-be/api/user/get/"+utente.id);
  }

  listaFumetti(){
    return this.http.post("http://2.44.173.210:7080/comic-be/api/comic/search",{});
  }

}