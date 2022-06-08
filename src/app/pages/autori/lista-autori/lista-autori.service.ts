import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UpdateAutoreCommand } from 'src/app/models/autori/author-command';

@Injectable({
  providedIn: 'root'
})
export class ListaAutoriService {

  httpHeader = new HttpHeaders().set('Content-type', 'application/json;charset-utf-8');
  options = { headers: this.httpHeader };

  constructor(private http: HttpClient) { }

  stampaAutori() {

    return this.http.post<any>("http://2.44.173.210:7080/comic-be/api/author/search/", {}); 

  }

  updateAutori(id: number, name: string, surname: string) {
    
    const user = new UpdateAutoreCommand;

    user.id = id;
    user.name = name;
    user.surname = surname;

    return this.http.put<any>("http://2.44.173.210:7080/comic-be/api/author/update/", user);

  }

  eliminaAutori(id: number) {

    return this.http.delete<any>("http://2.44.173.210:7080/comic-be/api/author/delete/"+id, this.options);

  }

}
