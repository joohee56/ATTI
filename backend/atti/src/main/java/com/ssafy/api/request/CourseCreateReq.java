package com.ssafy.api.request;

import java.util.Date;
import lombok.*;

@Getter
@Setter
public class CourseCreateReq {
	private Long departId;
	private String courseName;
	private String courseTeacherName;
	private Date courseStartTime;
	private Date courseEndTime;
	private Date courseDate; 
}
