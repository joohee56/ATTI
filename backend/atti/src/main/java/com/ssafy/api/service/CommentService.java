package com.ssafy.api.service;

import java.util.List;

import com.ssafy.api.request.CommentReq;
import com.ssafy.api.response.CommentViewReplyRes;
import com.ssafy.db.entity.depart.Comment;
import com.ssafy.db.entity.depart.Post;

public interface CommentService {
	List<CommentViewReplyRes> viewReply(Long postId); // 댓글 보기
	
	void createReply(CommentReq comment); // 댓글쓰기
	
	void deleteFindOne(Long commentId); // 댓글 삭제
}
