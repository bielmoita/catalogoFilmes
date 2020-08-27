package com.stefanini.catalogo.filmes.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name="TB_FILME")
public class Filme {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long codigoDoFilme;
	
	@NotNull
	@Size(min =2, max = 100)
	private String titulo;
	
	@NotNull
	@Size(min =2, max = 60)
	private String diretor;
	
	@NotNull
	@Size(min =2, max = 50)
	private String genero;
	
	@Size(min =2, max = 500)
	private String sinopse;
	
	@Size(min =2, max = 4)
	private String anoFilme;
	
	private String imagem;

	//Getters and Setters
	public long getCodigoDoFilme() {
		return codigoDoFilme;
	}

	public void setCodigoDoFilme(long codigoDoFilme) {
		this.codigoDoFilme = codigoDoFilme;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getDiretor() {
		return diretor;
	}

	public void setDiretor(String diretor) {
		this.diretor = diretor;
	}

	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}

	public String getSinopse() {
		return sinopse;
	}

	public void setSinopse(String sinopse) {
		this.sinopse = sinopse;
	}

	public String getAnoFilme() {
		return anoFilme;
	}

	public void setAnoFilme(String anoFilme) {
		this.anoFilme = anoFilme;
	}

	public String getImagem() {
		return imagem;
	}

	public void setImagem(String imagem) {
		this.imagem = imagem;
	}
	
	

}
