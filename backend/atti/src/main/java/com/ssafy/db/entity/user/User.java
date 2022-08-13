package com.ssafy.db.entity.user;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.db.entity.depart.Category;
import com.ssafy.db.entity.depart.Comment;
import com.ssafy.db.entity.depart.Depart;
import com.ssafy.db.entity.depart.Post;
import com.ssafy.db.entity.depart.UserCommentLike;
import com.ssafy.db.entity.depart.UserCommentMention;
import com.ssafy.db.entity.depart.UserDepart;
import com.ssafy.db.entity.depart.UserPostLike;
import com.ssafy.db.entity.depart.UserPostMention;
import com.ssafy.db.entity.message.Message;
import com.ssafy.db.entity.webclass.Attendance;
import com.ssafy.db.entity.webclass.Course;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {

//	@ApiModelProperty(name="유저 ID", example="ssafy")
	@Id
	@Column(name = "user_id")
	private String userId;
	
//	@ApiModelProperty(name="유저 Password", example="your_password")
//	@JsonIgnore
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private String password;

	@Column(name = "user_name")
	private String userName;
	private String email;

//	@Temporal(TemporalType.DATE)
	private String birth;
	private String phone;
	private String social;
	private Long uid;

	@Column(name = "user_delete_info")
	private boolean userDeleteInfo;

	@Column(name = "user_role")
	@Enumerated(EnumType.STRING)
	private UserRole userRole;

	
	/////////////////////////////////////////////////////
	

}
