package com.ssafy.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.request.CourseCreateReq;
import com.ssafy.api.service.CourseService;

@RestController
@RequestMapping("course")
public class CourseController {
	
	@Autowired
	CourseService courseService;
	
	// 시간표 생성
//	@PostMapping("/create")
//	public void createCourse(@RequestBody CourseCreateReq courseReq) {
//		courseService.createCourse(courseReq);
//		
//	}
	
	// 시간표 조회
	@GetMapping
	public void getCourse() {
		
	}
	
	// 시간표 삭제
	@DeleteMapping()
	public void deleteCourse() {
		
	}
	
	// 시간표 수정
	@PutMapping()
	public void updateCourse() {
		
	}
}
