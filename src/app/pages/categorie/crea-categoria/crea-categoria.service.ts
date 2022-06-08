import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriaCommand } from 'src/app/models/categoria/categoria-command';

@Injectable({
  providedIn: 'root'
})
export class CreaCategoriaService {

  constructor(private http: HttpClient) { }

  creaCategoria(name: string, description: string) {

    const category = new CategoriaCommand;

    category.name = name;
    category.description = description;

    return this.http.post<any>("http://2.44.173.210:7080/comic-be/api/category/create", category);

  }
  
}

