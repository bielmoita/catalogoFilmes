package com.stefanini.manutencao.filmes.repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stefanini.manutencao.filmes.model.Filme;

@Repository
public interface FilmeRepository extends JpaRepository<Filme, Long> {
	public List<Filme> findAllByTituloContainingIgnoreCase(String nome);

}
