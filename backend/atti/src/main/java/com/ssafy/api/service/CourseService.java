package com.ssafy.api.service;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.api.request.CourseCreateReq;
import com.ssafy.api.request.CourseUpdateReq;
import com.ssafy.db.entity.depart.Depart;
import com.ssafy.db.entity.webclass.Course;
import com.ssafy.db.repository.CourseRepository;
import com.ssafy.db.repository.DepartRepository;


@Service
public class CourseService {
	@Autowired
	CourseRepository courseRepository;
	@Autowired
	DepartRepository departRepository;
	
	// 시간표 생성
	public Long createCourse(CourseCreateReq courseReq) {
		Depart depart = departRepository.findById(courseReq.getDepartId()).orElse(null);
		
		Course course = Course.builder()
				.depart(depart)
				.courseName(courseReq.getCourseName())
				.courseTeacherName(courseReq.getCourseTeacherName())
				.courseStartTime(courseReq.getCourseStartTime())
				.courseEndTime(courseReq.getCourseEndTime())
				.courseDate(courseReq.getCourseDate()).build();
		
		Long courseId = courseRepository.save(course).getCourseId();
		return courseId;
	}
	
	// 시간표 수정
	public boolean updateCourse(CourseUpdateReq courseUpdateReq) {
		Course course = Course.builder()
			.courseId(courseUpdateReq.getCourseId())
			.courseName(courseUpdateReq.getCourseName())
			.courseTeacherName(courseUpdateReq.getCourseTeacherName())
			.courseStartTime(courseUpdateReq.getCourseStartTime())
			.courseEndTime(courseUpdateReq.getCourseEndTime())
			.courseDate(courseUpdateReq.getCourseDate()).build();
		
		courseRepository.save(course);
		return true;
	}
	
	// 시간표 삭제
	public void deleteCourse(Long courseId) {
		courseRepository.deleteById(courseId);
	}
	
	
	
}
