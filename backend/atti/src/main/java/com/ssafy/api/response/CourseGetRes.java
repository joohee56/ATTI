package com.ssafy.api.response;

import java.time.LocalDate;
import java.util.Date;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class CourseGetRes {
	private Long courseId;
	private String courseName;
	private String courseTeacherName;
	private Date courseStartTime;
	private Date courseEndTime;
	private LocalDate courseDate;
}
