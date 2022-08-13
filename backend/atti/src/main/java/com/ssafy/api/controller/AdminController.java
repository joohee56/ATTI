package com.ssafy.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.service.AdminService;
import com.ssafy.db.entity.depart.Post;
import com.ssafy.db.entity.depart.UserDepart;
import com.ssafy.db.entity.webclass.Attendance;

import io.swagger.annotations.Api;

@Api(value = "관리자 API", tags = {"Admin"})
@RestController
@RequestMapping("/api/admin")
public class AdminController {
	
	@Autowired
	AdminService adminService;
	
	// 채널 회원 목록 조회
//	@GetMapping("/user/check/{departId}") // 보냄
//	public ResponseEntity<List<UserDepart>> viewAllUsers(@PathVariable Long departId){	
//		return new ResponseEntity<List<UserDepart>>(adminService.viewAllUsers(departId), HttpStatus.OK);
//	}
	
	// 카테고리 삭제
	@DeleteMapping("/category/delete/{categoryId}")
	public ResponseEntity<String> deletecategory(@PathVariable Long categoryId){
		adminService.deleteCategory(categoryId);
		return new ResponseEntity<String>("Success", HttpStatus.OK);
	}
	
	// 학생 출결 변경
	@PutMapping("/attendance/modify")
	public ResponseEntity<String> editAttend(@RequestBody Attendance editAttend){
		adminService.editAttend(editAttend);
		return new ResponseEntity<String>("SUCCESS", HttpStatus.OK);
		
	}
	
	@GetMapping("/post/read")
	public ResponseEntity<List<Post>> getAdminPostList() {
		
		return new ResponseEntity<List<Post>>(adminService.getAdminPostList(), HttpStatus.OK);
	}

	}
