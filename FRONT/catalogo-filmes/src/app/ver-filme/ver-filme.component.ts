import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Filme } from '../model/Filme';
import { FilmesService } from '../service/filmes.service';

@Component({
  selector: 'app-ver-filme',
  templateUrl: './ver-filme.component.html',
  styleUrls: ['./ver-filme.component.css']
})
export class VerFilmeComponent implements OnInit {

  filme:Filme = new Filme;

  codigoDoFilmeString: string

  constructor(private filmesService: FilmesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    let codigoDoFilme = this.route.snapshot.params['id']

    this.findById(codigoDoFilme)
    
    // this.filmesService.getFilmeById(codigoDoFilme).subscribe((resp:Filme) => {
    //   this.filme = resp;
    // })
    window.scroll(0, 0)
  }

  findById(codigoDoFilme:number){
    this.filmesService.getFilmeById(codigoDoFilme).subscribe(
      (resp: Filme) =>{
        this.filme = resp
      })
  }

  EditarFilme(codigoDoFilme: number) {
    this.codigoDoFilmeString = codigoDoFilme.toString()
    localStorage.setItem('editarFilme', this.codigoDoFilmeString)
    this.router.navigate(['/cadastro'])  
    window.scroll(0, 0);
  }

}
