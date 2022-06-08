import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UpdateCategoriaCommand } from 'src/app/models/categoria/categoria-command';

@Injectable({
  providedIn: 'root'
})
export class ListaCategorieService {

  httpHeader = new HttpHeaders().set('Content-type', 'application/json;charset-utf-8');
  options = { headers: this.httpHeader };

  constructor(private http: HttpClient) { }

  stampaCategorie() {

    return this.http.post<any>("http://2.44.173.210:7080/comic-be/api/category/search/", {}); 

  }

  updateCategorie(id: number, name: string, description: string) {
    
    const user = new UpdateCategoriaCommand;

    user.id = id;
    user.name = name;
    user.description = description;

    return this.http.put<any>("http://2.44.173.210:7080/comic-be/api/category/update/", user);

  }

  eliminaCategorie(id: number) {

    return this.http.delete<any>("http://2.44.173.210:7080/comic-be/api/category/delete/"+id, this.options);

  }

}