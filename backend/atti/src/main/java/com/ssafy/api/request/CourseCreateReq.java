package com.ssafy.api.request;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CourseCreateReq {
	private Long departId;
	private String courseName;
	private String courseTeacherName;
	
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm")
	private Date courseStartTime;
	
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm")
	private Date courseEndTime;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date courseDate; 
}