import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInfo } from 'src/app/models/user/user-info';
import { UserDTO } from 'src/app/models/user/user-dto';

@Injectable({
  providedIn: 'root'
})
export class PopoverService {
  
  constructor(private http:HttpClient) { }

mostraUtente(url:ActivatedRoute){
  let utente: UserInfo = new UserInfo
  url.queryParams.subscribe(params => {
  utente.id = params['id'];
  } );

  return this.http.get<UserDTO>("http://2.44.173.210:7080/comic-be/api/user/get/"+utente.id);
}
}