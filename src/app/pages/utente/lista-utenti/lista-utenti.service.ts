import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UpdateUtenteCommand, IdCommand } from 'src/app/models/user/user-command';

@Injectable({
  providedIn: 'root'
})
export class ListaUtentiService {

  httpHeader = new HttpHeaders().set('Content-type', 'application/json;charset-utf-8');
  options = { headers: this.httpHeader };

  constructor(private http: HttpClient) { }

  stampaUtenti() {

    return this.http.post<any>("http://2.44.173.210:7080/comic-be/api/user/search/", {}); 

  }

  updateUtenti(id: string, name: string, surname: string, email: string, password: string) {
    
    const user = new UpdateUtenteCommand;

    user.id = id;
    user.name = name;
    user.surname = surname;
    user.email = email;
    user.password = password;

    return this.http.put<any>("http://2.44.173.210:7080/comic-be/api/user/update/", user);

  }

  eliminaUtenti(id: string) {

    return this.http.delete<any>("http://2.44.173.210:7080/comic-be/api/user/delete/"+id, this.options);

  }

}
