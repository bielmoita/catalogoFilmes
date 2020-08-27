package com.stefanini.manutencao.filmes.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stefanini.manutencao.filmes.model.Filme;
import com.stefanini.manutencao.filmes.repository.FilmeRepository;

@RestController
@RequestMapping("/filmes")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FilmeController {
	
	@Autowired
	private FilmeRepository repository;
	
	@GetMapping
	public ResponseEntity<List<Filme>> GetAll(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	//@GetMapping("/{codigoDoFilme}")
	//public ResponseEntity<Filme> GetById(@PathVariable long codigoDoFilme){
		//return repository.findById(codigoDoFilme)
				//.map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	//}
	
	//@GetMapping("/titulo/{titulo}")
	//public ResponseEntity<List<Filme>> GetByNome(@PathVariable String titulo){
		//return ResponseEntity.ok(repository.findAllByTituloContainingIgnoreCase(titulo));
		
	//}
	
	//@PostMapping
	//public ResponseEntity<Filme> post (@RequestBody Filme filme){
		//return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(filme));
		
	//}
	
	//@PutMapping
	//public ResponseEntity<Filme> put (@RequestBody Filme filme){
		//return ResponseEntity.status(HttpStatus.OK).body(repository.save(filme));
	//}
	
	//@DeleteMapping("/{codigoDoFilme}")
	//public void delete(@PathVariable long codigoDoFilme) {
		//repository.deleteById(codigoDoFilme);
	//}
	
	

}
