import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtenteCommand } from 'src/app/models/user/user-command';

@Injectable({
  providedIn: 'root'
})
export class CreaUtenteService {

  constructor(private http: HttpClient) { }

  creaUtente(name: string, surname: string, email: string, password: string) {
    
    const user = new UtenteCommand;

    user.name = name;
    user.surname = surname;
    user.email = email;
    user.password = password;

    return this.http.post<any>("http://2.44.173.210:7080/comic-be/api/login/register", user);

  }
  
}
