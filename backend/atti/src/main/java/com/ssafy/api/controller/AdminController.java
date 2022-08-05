//package com.ssafy.api.controller;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
////import io.swagger.annotations.Api;
////// @Api 클래스를 Swagger 리소스 대상으로 표시
////@Api(value  = "관리자 API", tags = {"Admin"})
//
//import com.ssafy.api.service.AdminService;
//import com.ssafy.db.entity.depart.Post;
//
//@RestController
//@RequestMapping("/admin")
//public class AdminController {
//	
//	@Autowired
//	private AdminService adminService;
//	
//	@GetMapping()
//	public ResponseEntity<List<Post>> getAdminPostList() {
//		
//		return new ResponseEntity<List<Post>>(adminService.getAdminPostList(), HttpStatus.OK);
//	}
//}
