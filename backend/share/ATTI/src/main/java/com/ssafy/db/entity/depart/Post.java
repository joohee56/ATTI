package com.ssafy.db.entity.depart;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.ssafy.db.entity.user.User;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Post {
	
	@Id @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="post_id")
	private Long postId;
	
	
	@Column(name="post_content")
	@Lob
	private String postContent;
	
	@Column(name="post_reg_date")
	@Temporal(TemporalType.TIMESTAMP)
	private Date postRegDate;
	
	@Column(name="post_upd_date")
	@Temporal(TemporalType.TIMESTAMP)
	private Date postUpdDate;
	
	@Column(name="post_ano_info")
	private boolean postAnoInfo;
	
	@Column(name="post_com_ban_info")
	private boolean postComBanInfo;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_id")
	private User user;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="category_id")
	private Category category;
	
	@OneToMany(mappedBy = "post")
    private List<Comment> comments = new ArrayList<>();
	
	@OneToMany(mappedBy = "post")
    private List<Image> images = new ArrayList<>();
	
	@OneToMany(mappedBy = "post")
    private List<File> files = new ArrayList<>();
	
	@OneToMany(mappedBy = "post")
    private List<UserPostMention> userpostmention = new ArrayList<>();
	
	@OneToMany(mappedBy = "post")
	private List<UserPostLike> userpostlike = new ArrayList<>();
	
	
}
