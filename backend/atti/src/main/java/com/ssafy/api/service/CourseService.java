package com.ssafy.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.api.request.CourseCreateReq;
import com.ssafy.db.entity.webclass.Course;
import com.ssafy.db.repository.CourseRepository;


@Service
public class CourseService {
	@Autowired
	CourseRepository courseRepository;
	
//	public void createCourse(CourseCreateReq courseReq) {
//		Depart depart = 
//		Course course = Course.builder().
//	}
	
}
