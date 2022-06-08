import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FumettoCommand } from 'src/app/models/DTO/fumetti-command';

@Injectable({
  providedIn: 'root'
})
export class CreaFumettoService {

  constructor(private http: HttpClient) { }

  creaFumetto( nome: string, description: string, type: string, authorID: number, categoryID: number) {

    const fumetto = new FumettoCommand;

    fumetto.name = nome;
    fumetto.description = description;
    fumetto.type = type;
    fumetto.idAuthor = authorID;
    fumetto.idCategory = categoryID;

    return this.http.post<any>("http://2.44.173.210:7080/comic-be/api/comic/create", fumetto);

  }
  
}
