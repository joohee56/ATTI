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

import com.ssafy.api.request.CategoryCreateReq;
import com.ssafy.api.request.DepartCreateReq;
import com.ssafy.api.request.DepartJoinReq;
import com.ssafy.api.request.ViewAllPostsReq;
import com.ssafy.api.response.PostViewAllRes;
import com.ssafy.api.service.CategoryService;
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
	
	@Autowired
	private CategoryService categoryService;
	
	@PostMapping("/create") // 채널 생성
	public ResponseEntity<String> createChannel(@RequestBody DepartCreateReq departCreateReq) {
		System.out.println("===========================" + departCreateReq.getDepartName() + "=============================");
		System.out.println("===========================" + departCreateReq.getUserId() + "=============================");
		departService.createChannel(departCreateReq); //, userId
		return new ResponseEntity<String>("SUCCESS", HttpStatus.OK);
	}
	
	@GetMapping("/{departCode}") // 채널 입장 
	public ResponseEntity<String> joinChannel(@PathVariable String departCode) {
//		System.out.println("===========================" + departId + "=============================");
		return new ResponseEntity<String>(departService.joinChannel(departCode), HttpStatus.OK);
	}
	
	@GetMapping("/{departId}/category/{categoryId}/user/{userId}") // 게시글 전체 조회
	public ResponseEntity<List<PostViewAllRes>> viewAllPosts(@PathVariable Long departId, @PathVariable Long categoryId, @PathVariable String userId) {
		System.out.println("===========================" + departId + "=============================");
		System.out.println("===========================" + categoryId + "=============================");
		return new ResponseEntity<List<PostViewAllRes>>(postService.viewAllPosts(departId, categoryId, userId), HttpStatus.OK);
	}
	
	// 카테고리 생성
	@PostMapping("/category/create")
	public ResponseEntity<String> createCategory(@RequestBody CategoryCreateReq categoryCreateReq) {
		System.out.println("=========================");
		System.out.println("cType :"+ categoryCreateReq.getType());
		System.out.println(categoryCreateReq.getCategoryName());
		System.out.println("=========================");
		
		categoryService.createCategory(categoryCreateReq);
		return new ResponseEntity<String>("SUCCESS", HttpStatus.OK);
	}
}
