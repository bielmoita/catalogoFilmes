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

  filme: Filme;

  constructor(private filmesService: FilmesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params['id']
    this.filmesService.getFilmeById(id).subscribe((resp:Filme) => {
      this.filme = resp;
    })

    window.scroll(0, 0)
  }

}
