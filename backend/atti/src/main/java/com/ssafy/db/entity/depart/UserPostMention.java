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
public class UserPostMention {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="user_post_mention_id")
	private Long userPostMentionId;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_id")
	private User user;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="post_id")
	private Post post;
	
	public void setUser(User user) {
		this.user = user;
		user.getUserpostmentions().add(this);
	}
	
	public void setPost(Post post) {
		this.post = post;
		post.getUserpostmentions().add(this);
	}
}