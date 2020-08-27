export class Filme{
   public id:string;
   public titulo:string;
   public diretor:string;
   public genero:string;
   public sinopse:string;
   public anoFilme:string;

    imagem:string;
}


export interface ResultFilmes{
    filmes:Filme[];
}