package com.ssafy.db.entity.user;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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

import lombok.Getter;
import lombok.Setter;


@Entity
@Getter @Setter
public class User{
	
	@Id @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="user_id")
	private Long userId;
	
    @Column(name="user_name")
	private String userName;
    private String email;
    
    @Temporal(TemporalType.DATE)
    private Date birth;
    private String phone;
    private String social;
    private Long uid;
    
    @Column(name="user_delete_info")
    private boolean userDeleteInfo;
    
    @Column(name="user_role")
    @Enumerated(EnumType.STRING)
    private UserRole userRole;
    
    @OneToMany(mappedBy = "user")
    private List<Comment> comments = new ArrayList<>();
    
    @OneToMany(mappedBy = "tuser")
    private List<UserMessage> touser = new ArrayList<>();
    
    @OneToMany(mappedBy = "fuser")
    private List<UserMessage> fromuser = new ArrayList<>();
    
    @OneToMany(mappedBy = "user")
    private List<Attendance> attendances = new ArrayList<>();
    
    @OneToMany(mappedBy = "user")
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
    
    @OneToOne(mappedBy = "user", fetch = FetchType.LAZY)
    private Profile profile;
    
    @OneToOne(mappedBy = "make_user", fetch = FetchType.LAZY)
    private Course course;
    
	@OneToMany(mappedBy = "user")
    private List<UserPostMention> userpostmention = new ArrayList<>();

	@OneToMany(mappedBy = "user")
	private List<UserPostLike> userpostlike = new ArrayList<>();
	
	@OneToMany(mappedBy = "user")
    private List<UserCommentMention> usercommentmention = new ArrayList<>();
	
	@OneToMany(mappedBy = "user")
	private List<UserCommentLike> usercommentlike = new ArrayList<>();
	
	@OneToMany(mappedBy = "user")
	private List<UserCourse> usercourse = new ArrayList<>();
	
	@OneToMany(mappedBy = "user")
	private List<UserDepart> userDepart = new ArrayList<>();
	
	}
