package com.ssafy.atti.db.entity.depart;

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

import com.ssafy.atti.db.entity.message.UserMessage;
import com.ssafy.atti.db.entity.user.User;
import com.ssafy.atti.db.entity.user.UserRole;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Comment {

	@Id @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="comment_id")
	private Long commentId;
	
	@Column(name="comment_reg_date")
	@Temporal(TemporalType.TIMESTAMP)
	private Date commnetRegDate;
	
	@Column(name="comment_delete_info")
	private boolean commentDeleteInfo;
	
	@Column(name="comment_ano_info")
	private boolean commentAnoInfo;
	
	@Column(name="comment_content")
	@Lob
	private String commentContent;
	
	@Column(name="comment_group")
	private int commentGroup;
	
	@Column(name="comment_level")
	private int commentLevel;
	
	private boolean seq;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_id")
	private User user;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="post_id")
	private Post post;
	
	@OneToMany(mappedBy = "post")
    private List<UserCommentMention> usercommentmention = new ArrayList<>();
	
	@OneToMany(mappedBy = "post")
	private List<UserCommentLike> usercommentlike = new ArrayList<>();
}
