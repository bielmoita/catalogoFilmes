export class Filme{
   public codigoDoFilme:number;
   public titulo:string;
   public diretor:string;
   public genero:string;
   public sinopse:string;
   public anoFilme:string;

   public imagem:string;
}


export interface ResultFilmes{
    filmes:Filme[];
}