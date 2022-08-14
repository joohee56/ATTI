package com.ssafy.api.response;

import java.time.LocalDateTime;

import com.ssafy.db.entity.depart.Post;

import lombok.Getter;

@Getter
public class PostViewOneRes {
	
	private Long postId;
	
	private String postTitle;
	
	private String postContent;
	
	private LocalDateTime postRegDate;
	
//	private LocalDateTime postUpdDate;
	
	private String userId;
	
	public PostViewOneRes(Post post) {
		this.postId = post.getPostId();
		this.postTitle = post.getPostTitle();
		this.postContent = post.getPostContent();
		this.postRegDate = post.getPostRegDate();
		this.userId = post.getUser().getUserId();
	}
}
