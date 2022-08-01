package com.ssafy.db.entity.depart;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.db.entity.user.Auth;
import com.ssafy.db.entity.user.User;

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
public class UserCommentLike {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="user_comment_like_id")
	private Long userCommentLikeId;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_id")
	private User user;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="comment_id")
	private Comment comment;
	
	public void setUser(User user) {
		this.user = user;
		user.getUsercommentlikes().add(this);
	}
	
	public void setComment(Comment comment) {
		this.comment = comment;
		comment.getUsercommentlikes().add(this);
	}
}