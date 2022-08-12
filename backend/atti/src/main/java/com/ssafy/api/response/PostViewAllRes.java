package com.ssafy.api.response;

import java.time.LocalDateTime;

import com.ssafy.db.entity.depart.Post;

public class PostViewAllRes {
	
	private String postTitle;
	
	private String postContent;
	
	private LocalDateTime postRegDate;
	
	private String userId;
	
	public PostViewAllRes(Post post) {
		this.postTitle = post.getPostTitle();
		this.postContent = post.getPostContent();
		this.postRegDate = post.getPostRegDate();
		this.userId = post.getUser().getUserId();
	}
}
