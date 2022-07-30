package com.ssafy.db.entity.user;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.ssafy.db.entity.chat.Chat;
import com.ssafy.db.entity.depart.Category;
import com.ssafy.db.entity.depart.Comment;
import com.ssafy.db.entity.depart.Depart;
import com.ssafy.db.entity.depart.Post;
import com.ssafy.db.entity.depart.UserCommentLike;
import com.ssafy.db.entity.depart.UserCommentMention;
import com.ssafy.db.entity.depart.UserDepart;
import com.ssafy.db.entity.depart.UserPostLike;
import com.ssafy.db.entity.depart.UserPostMention;
import com.ssafy.db.entity.message.UserMessage;
import com.ssafy.db.entity.webclass.Attendance;
import com.ssafy.db.entity.webclass.Course;
import com.ssafy.db.entity.webclass.UserCourse;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private Long userId;

	@Column(name = "user_name")
	private String userName;
	private String email;

	@Temporal(TemporalType.DATE)
	private Date birth;
	private String phone;
	private String social;
	private Long uid;

	@Column(name = "user_delete_info")
	private boolean userDeleteInfo;

	@Column(name = "user_role")
	@Enumerated(EnumType.STRING)
	private UserRole userRole;

	@OneToMany(mappedBy = "tuser")
	private List<UserMessage> tousers = new ArrayList<>();
	
	@OneToMany(mappedBy = "fuser")
	private List<UserMessage> fromusers = new ArrayList<>();

	@OneToMany(mappedBy = "user") 
	private List<Comment> comments = new ArrayList<>();
	 
	  
	@OneToMany(mappedBy = "user")
	private List<Attendance> attendances = new ArrayList<>();
	  
	@OneToMany(mappedBy = "in_user")
	private List<Course> courses = new ArrayList<>();
	  
	@OneToMany(mappedBy = "user")
	private List<Chat> chats = new ArrayList<>();
	  
	@OneToMany(mappedBy = "user")
	private List<Depart> departs = new ArrayList<>();
	  
	@OneToMany(mappedBy = "user")
	private List<Post> posts = new ArrayList<>();
	  
	@OneToMany(mappedBy = "user")
	private List<Category> categorys = new ArrayList<>();
	 

	@OneToOne(mappedBy = "user", fetch = FetchType.LAZY)
	private Auth auth;

	@OneToOne(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private Profile profile;

	@OneToOne(mappedBy = "make_user", fetch = FetchType.LAZY)
	private Course course;
	 
	@OneToMany(mappedBy = "user")
	private List<UserPostMention> userpostmentions = new ArrayList<>();
	  
	@OneToMany(mappedBy = "user")
	private List<UserPostLike> userpostlikes = new ArrayList<>();
	  
	@OneToMany(mappedBy = "user")
	private List<UserCommentMention> usercommentmentions = new ArrayList<>();
	  
	@OneToMany(mappedBy = "user")
	private List<UserCommentLike> usercommentlikes = new ArrayList<>();
	  
	@OneToMany(mappedBy = "user")
	private List<UserCourse> usercourses = new ArrayList<>();
	  
	@OneToMany(mappedBy = "user")
	private List<UserDepart> userDeparts = new ArrayList<>();
	
	// 연관관계메소드
	public void setProfile(Profile profile) {
		this.profile = profile;
		profile.setUser(this);
	}
	
	public void setCourse(Course course) {
		this.course = course;
		course.setUser(this);
	}

}
