package com.ssafy.api.response;

import java.time.LocalDateTime;

import com.ssafy.db.entity.depart.Post;

import lombok.Getter;

@Getter
public class PostViewAllRes {
	
	private String postTitle;
	
	private String postContent;
	
	private LocalDateTime postRegDate;
	
	private String userId = "익명";
	
	public PostViewAllRes(Post post) {
		this.postTitle = post.getPostTitle();
		this.postContent = post.getPostContent();
		this.postRegDate = post.getPostRegDate();
		if(post.getUser() != null) {
			this.userId = post.getUser().getUserId();
		}
	}
}
