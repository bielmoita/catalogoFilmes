import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultFilmes } from '../model/Filme';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor( private http: HttpClient) { }

  //Implementação do CRUD

  //Read
  getAllFilmes(){
    return this.http.get('http://localhost:8080/filmes')
  }

  GetByTitulo(titulo : string){
    return this.http.get(`http://localhost:8080/filmes/titulo/${titulo}`).pipe(
      map((resp: any) => resp.filmes)
    )

  }

  getFilmeById(id: string){
    return this.http.get(`http://localhost:8080/filmes/titulo/${id}`).pipe(
      map((resp:any) => resp.card)
    )
  }


}
