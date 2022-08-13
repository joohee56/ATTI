package com.ssafy.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.request.CommentReq;
import com.ssafy.api.service.CommentService;
import com.ssafy.db.entity.depart.Comment;
import com.ssafy.db.entity.depart.Post;
import com.ssafy.db.repository.CommentRepository2;

@RestController
@RequestMapping("/post/comment")
public class CommentController {
	
	@Autowired
	private CommentService commentService;
	
	@Autowired
	private CommentRepository2 commentRepository;
	
	@PostMapping("/write") // 댓글 작성
	public ResponseEntity<String> createReply(@RequestBody CommentReq comment) {
		System.out.println(comment);
		commentService.createReply(comment);
		
		return new ResponseEntity<String>("SUCCESS", HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{commentId}") // 단일 댓글 삭제
	public ResponseEntity<String> deleteFindOne(@PathVariable Long commentId) {
		commentService.deleteFindOne(commentId);
		return new ResponseEntity<String>("SUCCESS", HttpStatus.OK);
	}
	
	@GetMapping("/read/{postId}") // 한 게시글의 댓글 보기
	public ResponseEntity<List<Comment>> viewReply(@PathVariable Post postId){
		commentService.viewReply(postId);
		return new ResponseEntity<List<Comment>>(commentService.viewReply(postId), HttpStatus.OK);
	}
}
