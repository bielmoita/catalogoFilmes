import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultFilmes } from '../model/Filme';
import { map } from 'rxjs/operators';
import { Filme } from '../model/Filme';

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

  getFilmeById(codigoDoFilme : number){
    return this.http.get(`http://localhost:8080/filmes/${codigoDoFilme}`) 
  }

  getFilmeByGenero(genero:string){
    return this.http.get(`http://localhost:8080/filmes/genero/${genero}`)
  }

  putFilme(filme: Filme){
    return this.http.put('http://localhost:8080/filmes', filme)
  }


  delete(codigoDoFilme: number) {
    return this.http.delete(`http://localhost:8080/filmes/${codigoDoFilme}`)
  }


}
