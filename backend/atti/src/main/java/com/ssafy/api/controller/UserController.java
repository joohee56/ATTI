package com.ssafy.api.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.service.UserService;
import com.ssafy.db.entity.user.User;

import lombok.RequiredArgsConstructor;

@Controller
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
	@PostMapping("/signup/normal")
	public String signUpNormal(@RequestBody User user) throws Exception {
		// 유효성 체크
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
