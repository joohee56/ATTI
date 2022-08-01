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

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.db.entity.message.UserMessage;
import com.ssafy.db.entity.user.Auth;
import com.ssafy.db.entity.user.User;
import com.ssafy.db.entity.user.UserRole;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Comment {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
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
	
	@OneToMany(mappedBy = "comment")
    private List<UserCommentMention> usercommentmentions = new ArrayList<>();
	
	@OneToMany(mappedBy = "comment")
	private List<UserCommentLike> usercommentlikes = new ArrayList<>();
	
	public void setUser(User user) {
		this.user = user;
		user.getComments().add(this);
	}
	
	public void setPost(Post post) {
		this.post = post;
		user.getComments().add(this);
	}
	
	
}
