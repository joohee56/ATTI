package com.ssafy.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.service.PostService;
import com.ssafy.db.entity.depart.Post;
import com.ssafy.db.repository.PostRepository;

@RestController
@RequestMapping("/post")
public class PostController {
	
	
	
	@Autowired
	private PostService postService;
	
	@Autowired
	private PostRepository postRepository;
	
	@GetMapping() // 게시글 전체 조회
	public ResponseEntity<List<Post>> viewAllPosts() {
		
		return new ResponseEntity<List<Post>>(postService.viewAllPosts(), HttpStatus.OK);
	}
	
	@PostMapping("/write")
	public ResponseEntity<String> createWriting(@RequestBody Post post) {
		System.out.println(post);
		postService.createWriting(post);
		System.out.println(post);
		return new ResponseEntity<String>("SUCCESS", HttpStatus.OK);
	}
	
//	@GetMapping("/read") // 게시글 상세 조회
//	public ResponseEntity<Post> viewFindOne(Long postId) {
//		if(postService.viewFindOne(postId) == postId) {
//			
//		}
//		return new ResponseEntity<Post>(postService.viewFindOne(postId), HttpStatus.OK);
//	}
	
	
}
