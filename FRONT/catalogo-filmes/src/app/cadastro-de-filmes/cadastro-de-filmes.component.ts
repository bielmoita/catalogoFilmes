import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmesService } from '../service/filmes.service';
import { Filme } from '../model/Filme';

@Component({
  selector: 'app-cadastro-de-filmes',
  templateUrl: './cadastro-de-filmes.component.html',
  styleUrls: ['./cadastro-de-filmes.component.css']
})
export class CadastroDeFilmesComponent implements OnInit {

  listaFilmes: Filme[];

  filme:Filme = new Filme;

  alerta:boolean = false;

  constructor(public router: Router, private filmesService: FilmesService) { }

  ngOnInit(): void {
    let codigoFilmeEditar;
    
    codigoFilmeEditar = Number(localStorage.getItem('editarFilme')) ;
    this.findByCodigoDoFilme(codigoFilmeEditar)
    
  }

  salvar(){
    this.filmesService.putFilme(this.filme).subscribe((resp: Filme) =>{
      this.filme = resp;
      alert("Filme cadastrado com exito");
      location.assign('/cadastro');
    }, err =>{
      alert('Houve um erro ao cadastrar o filme, verifique os atributos inseridos');
    })
  }

  deletar(codigoDoFilme:number){
    this.filmesService.delete(codigoDoFilme).subscribe(() => {

    })
    alert('O Filme foi removido!');
    location.assign('/cadastro');
  }
  
  editarByCodigoDoFilme(codigoDoFilme: number) {
    this.filmesService.getFilmeById(codigoDoFilme).subscribe((resp: Filme) => {
      this.filme = resp
    })
    window.scroll(0, 0);     
  }

  findByCodigoDoFilme(codigoDoFilme: number) {
    this.filmesService.getFilmeById(codigoDoFilme).subscribe((resp: Filme) => {
      this.filme = resp
    })
  }



}
