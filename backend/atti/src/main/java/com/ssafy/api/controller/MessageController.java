package com.ssafy.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.service.MessageService;
import com.ssafy.db.entity.message.UserMessage;

@RestController
@RequestMapping("/message/individual")
public class MessageController {
	
	@Autowired
	private MessageService messageService;
	
	@GetMapping("/read/{userMessageId}")
	public ResponseEntity<List<UserMessage>> viewAllMessage(@PathVariable Long userMessageId) {
		System.out.println(userMessageId);
		return new ResponseEntity<List<UserMessage>>(messageService.viewAllMessage(userMessageId), HttpStatus.OK);
	}
	
	
}
