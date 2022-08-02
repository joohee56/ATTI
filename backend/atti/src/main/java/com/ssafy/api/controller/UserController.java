package com.ssafy.api.controller;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.request.MemberRequest;
import com.ssafy.api.service.UserService;
import com.ssafy.db.entity.user.User;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;

@Api(value = "유저 API", tags = {"User"})
@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {
	
	private final UserService userService;
	
	// 단순 회원가입 페이지 이동
	@GetMapping("/signup")	
	public String register() {
		return "user/join";
	}
	
	// 단순 로그인 페이지 이동
	@GetMapping("/login")	
	public String login() {
		return "user/login";
	}
	
	// 일반 회원가입
	@ApiResponses({
		@ApiResponse(code =  200, message = "성공"),
		@ApiResponse(code = 401, message = "인증 실패"),
		@ApiResponse(code = 404, message = "사용자 없음"),
		@ApiResponse(code = 500, message = "서버 오류")
	})
	@PostMapping("/signup/normal")
	public String signUpNormal(@RequestBody @Valid User user) throws Exception {
		userService.signUp(user);
		return "redirect:/user/login";
	}
	
	// 소셜 회원가입
	@PostMapping("/signup/social")
	public void signUpSocial(User user) {
		
	}
	
	// 아이디 중복 체크
	@GetMapping("/idcheck")
	public void idCheck() {
		
	}

}
