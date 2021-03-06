import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmesComponent } from './filmes/filmes.component';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { VerFilmeComponent } from './ver-filme/ver-filme.component';
import { CadastroDeFilmesComponent } from './cadastro-de-filmes/cadastro-de-filmes.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'sobre', component: SobreComponent},
  { path: 'filmes', component: FilmesComponent},
  { path: 'verFilme/:id', component: VerFilmeComponent}, 
  { path: 'cadastro', component: CadastroDeFilmesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
