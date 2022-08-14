package com.ssafy.api.request;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CourseUpdateReq {
	private Long courseId;
	private String courseName;
	private String courseTeacherName;
	
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm")
	private Date courseStartTime;
	
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm")
	private Date courseEndTime;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date courseDate;

}
