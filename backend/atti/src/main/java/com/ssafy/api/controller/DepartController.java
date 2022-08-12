package com.ssafy.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.request.DepartCreateReq;
import com.ssafy.api.request.DepartJoinReq;
import com.ssafy.api.response.PostViewAllRes;
import com.ssafy.api.service.DepartService;
import com.ssafy.api.service.PostService;
import com.ssafy.db.entity.depart.Depart;

@RestController // depart/{depart_code}/category/{category_name}/post
@RequestMapping("/depart")
public class DepartController {
	
	@Autowired
	private DepartService departService;
	
	@Autowired
	private PostService postService;
	
	@PostMapping("/create") // 채널 생성
	public ResponseEntity<String> createChannel(@RequestBody DepartCreateReq departCreateReq) {
		departService.createChannel(departCreateReq); //, userId
		return new ResponseEntity<String>("SUCCESS", HttpStatus.OK);
	}
	
	@GetMapping("/{departId}") // 채널 입장 
	public ResponseEntity<String> joinChannel(@PathVariable Long departId) {
//		System.out.println("===========================" + departId + "=============================");
		return new ResponseEntity<String>(departService.joinChannel(departId), HttpStatus.OK);
	}
	
	@GetMapping("/{departId}/category/{categoryId}/post") // 게시글 전체 조회
	public ResponseEntity<List<PostViewAllRes>> viewAllPosts(@PathVariable Long departId, @PathVariable Long categoryId) {
		System.out.println("===========================" + departId + "=============================");
		System.out.println("===========================" + categoryId + "=============================");
		return new ResponseEntity<List<PostViewAllRes>>(postService.viewAllPosts(departId, categoryId), HttpStatus.OK);
	}
}
