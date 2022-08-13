package com.ssafy.api.response;

import java.time.LocalDateTime;

import com.ssafy.db.entity.depart.Comment;

import lombok.Getter;

@Getter
public class CommentViewReplyRes {
	
	private String commentContent;
	
	private LocalDateTime commentRegDate;
	
	private int commentGroup;
	
	private int commentLevel;
	
	private boolean seq;
	
	private String userId;
	
	public CommentViewReplyRes(Comment comment) {
		this.commentContent = comment.getCommentContent();
		this.commentRegDate = comment.getCommentRegDate();
		this.commentGroup = comment.getCommentGroup();
		this.commentLevel = comment.getCommentLevel();
		this.seq = comment.isSeq();
		this.userId = comment.getUser().getUserId();
	}
}