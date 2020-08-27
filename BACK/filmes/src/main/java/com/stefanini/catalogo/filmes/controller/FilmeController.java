package com.stefanini.catalogo.filmes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stefanini.catalogo.filmes.model.Filme;
import com.stefanini.catalogo.filmes.repository.FilmeRepository;

@RestController
@RequestMapping("/filmes")
@CrossOrigin("*")
public class FilmeController {
	
	@Autowired
	private FilmeRepository repository;
	
	@GetMapping
	public ResponseEntity<List<Filme>> GetAll(){
		return ResponseEntity.ok(repository.findAll());
	}

}
