package com.ssafy.api.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.api.request.CourseCreateReq;
import com.ssafy.api.request.CourseGetReq;
import com.ssafy.api.request.CourseUpdateReq;
import com.ssafy.api.response.CourseAttendenceRes;
import com.ssafy.api.response.CourseGetRes;
import com.ssafy.db.entity.depart.Depart;
import com.ssafy.db.entity.depart.UserDepart;
import com.ssafy.db.entity.webclass.Course;
import com.ssafy.db.repository.CourseRepository;
import com.ssafy.db.repository.DepartRepository;
import com.ssafy.db.repository.UserDepartRepository;


@Service
public class CourseService {
	@Autowired
	CourseRepository courseRepository;
	@Autowired
	DepartRepository departRepository;
	@Autowired
	UserDepartRepository userDepartReposity;
	
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
	
	// 시간표 조회
	public List<CourseGetRes> getCourse(CourseGetReq courseGetReq) {
		LocalDate startDate = courseGetReq.getWeekStartDate().plusDays(1);	// 2022-08-14 ~ 2022-08-20
		LocalDate endDate = startDate.plusDays(5);
		
//		System.out.println("startDate: " + startDate + ", endDate: " + endDate);
		// course 중에 departId 에 해당하는 course 중 start Date between end Date 에 해당하는 리스트 뽑기
		Depart depart = departRepository.findById(courseGetReq.getDepartId()).orElse(null);
		if(depart == null) return null;
		
		List<Course> courseList = courseRepository.findAllByDepartAndCourseDateBetween(depart, startDate, endDate);
		
		if(courseList.isEmpty()) return null;
		
		List<CourseGetRes> courseResList = new ArrayList<>();
		for(Course c : courseList) {
			courseResList.add(CourseGetRes.builder()
					.courseId(c.getCourseId())
					.courseName(c.getCourseName())
					.courseTeacherName(c.getCourseTeacherName())
					.courseStartTime(c.getCourseStartTime())
					.courseEndTime(c.getCourseEndTime())
					.courseDate(c.getCourseDate()).build());
		}
		
		return courseResList;
	}
	
	public List<CourseAttendenceRes> getAttendence(Long departId){
		Depart depart = departRepository.findById(departId).orElse(null);
		List<UserDepart> userDepartList = userDepartReposity.findByDepart(depart);
		
		List<CourseAttendenceRes> attendenceList = new ArrayList<CourseAttendenceRes>();
		
		if(userDepartList.isEmpty()) {
			return null;
		}
		
		for(UserDepart ud : userDepartList) {
			attendenceList.add(CourseAttendenceRes.builder()
					.userId(ud.getUser().getUserId())
					.userName(ud.getUser().getUserName()).build());
		}
		
		return attendenceList;
	}
	
}
