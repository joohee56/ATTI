package com.ssafy.api.response;

import java.time.LocalDateTime;

import com.ssafy.db.entity.depart.Comment;

import lombok.Getter;

@Getter
public class CommentViewReplyRes {
	
	private Long commentId;
	
	private String commentContent;
	
	private LocalDateTime commentRegDate;
	
	private int commentGroup;
	
	private int commentLevel;
	
	private boolean seq;
	
	private String userId = "익명";
	
	public CommentViewReplyRes(Comment comment) {
		this.commentId = comment.getCommentId();
		this.commentContent = comment.getCommentContent();
		this.commentRegDate = comment.getCommentRegDate();
		this.commentGroup = comment.getCommentGroup();
		this.commentLevel = comment.getCommentLevel();
		this.seq = comment.isSeq();
		if(comment.getUser() != null) {
			this.userId = comment.getUser().getUserId();
		}
	}
}