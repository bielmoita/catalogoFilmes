import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../service/filmes.service';
import { Filme } from '../model/Filme';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {


  listaFilmes: Filme[];

  titulo:string;

  constructor( private filmesService: FilmesService) { }

  ngOnInit() {
    this.findAllFilmes();
  }

  findAllFilmes(){
    this.filmesService.getAllFilmes().subscribe(
      (resp: Filme[]) =>{
        this.listaFilmes = resp;

        console.log(resp)
      }
    )
  }

  pesquisarPorTitulo(){
    this.filmesService.GetByTitulo(this.titulo).subscribe(
      (resp:Filme[]) =>{
        this.listaFilmes = resp;
        console.log(resp);
      }
    )


  }

}
