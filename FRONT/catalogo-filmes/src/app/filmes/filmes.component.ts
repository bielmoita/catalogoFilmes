import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../service/filmes.service';
import { Filme } from '../model/Filme';
import { Local } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {


  listaFilmes: Filme[];

  titulo:string;

  genero: string = localStorage.getItem('genero')

  constructor( private filmesService: FilmesService) { }

  ngOnInit() {
    this.findAllFilmes();
    
  }

  // pesquisarPorNome() {
  //   this.produtoService.GetByNome(this.nome).subscribe((resp: Produto[]) => {
  //     this.listaProdutos = resp
  //   })
  //   localStorage.setItem('produtos', "nao");
  // }

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

  buscaGenero(){
    this.filmesService.getFilmeByGenero(this.genero).subscribe(
      (resp:Filme[]) =>{
        this.listaFilmes = resp;
        console.log(resp);
      }
    )
    localStorage.setItem('genero', "nao")
    location.assign('/filmes')
  }


  buscaAcao() {
    localStorage.setItem('genero', "acao");
    location.assign('/filmes');
  }

  buscaAnimacao() {
    localStorage.setItem('genero', "animacao");
    location.assign('/filmes');
  }

  buscaAventura() {
    localStorage.setItem('genero', "aventura");
    location.assign('/filmes');
  }

  buscaComedia() {
    localStorage.setItem('genero', "comedia");
    location.assign('/filmes');
  }

  buscaFiccao() {
    localStorage.setItem('genero', "ficcao");
    location.assign('/filmes');
  }

  buscaOutros() {
    localStorage.setItem('genero', "outros");
    location.assign('/filmes');
  }

}
