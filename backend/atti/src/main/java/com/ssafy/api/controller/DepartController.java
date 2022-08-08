package com.ssafy.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.service.DepartService;
import com.ssafy.db.entity.depart.Depart;

@RestController
@RequestMapping("/depart")
public class DepartController {
	
	@Autowired
	private DepartService departService;
	
	@PostMapping("/create") // 채널 생성
	public ResponseEntity<String> createChannel(@RequestBody Depart depart) {
		departService.createChannel(depart);
		System.out.println(depart);
		return new ResponseEntity<String>("SUCCESS", HttpStatus.OK);
	}
	
	@GetMapping("/{departCode}") // 채널 입장
	public ResponseEntity<Depart> joinChannel(@PathVariable String departCode) {
		return new ResponseEntity<Depart>(departService.joinChannel(departCode), HttpStatus.OK);
	}
}
