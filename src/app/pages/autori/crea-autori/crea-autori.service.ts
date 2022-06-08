import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthorCommand } from 'src/app/models/autori/author-command';

@Injectable({
  providedIn: 'root'
})
export class CreaAutoriService {
  [x: string]: any;

  constructor(private http: HttpClient) { }

  creaAutore(name: string, surname: string) {
    
    alert(surname);

    const user = new AuthorCommand;

    user.name = name;
    user.surname = surname;

    alert(user.surname);

    return this.http.post<any>("http://2.44.173.210:7080/comic-be/api/author/create", user);

  }
  
}
