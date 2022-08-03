package com.ssafy.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.db.entity.depart.Comment;
import com.ssafy.db.repository.CommentRepository;

@Service
@Transactional
public class CommentServiceImpl implements CommentService {
	
	@Autowired
	private CommentRepository commentRepository;
	
	@Override // 댓글 작성
	public void createReply(Comment comment) {
		commentRepository.insertWriting(comment);
	}

	@Override // 단일 댓글 삭제
	public void deleteFindOne(Long commentId) {
		commentRepository.deleteOne(commentId);
	}
	
}
