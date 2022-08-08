package com.ssafy.api.service;

import java.util.List;

import com.ssafy.db.entity.depart.Comment;

public interface CommentService {
	List<Comment> viewReply(Long postId);
	
	void createReply(Comment comment); // 댓글쓰기
	
	void deleteFindOne(Long commentId); // 댓글 삭제
}
