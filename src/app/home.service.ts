import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ListaService {

  constructor(private http:HttpClient) { }

  listaFumetti(){
    return this.http.post("http://2.44.173.210:7080/comic-be/api/comic/search",{});
  }

}