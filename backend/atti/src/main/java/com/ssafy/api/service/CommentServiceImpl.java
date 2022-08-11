package com.ssafy.api.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.api.request.CommentReq;
import com.ssafy.db.entity.depart.Comment;
import com.ssafy.db.entity.depart.Post;
import com.ssafy.db.entity.user.User;
import com.ssafy.db.repository.CommentRepository;
import com.ssafy.db.repository.PostRepository;
import com.ssafy.db.repository.UserRepository;

@Service
@Transactional
public class CommentServiceImpl implements CommentService {
	
	@Autowired
	private CommentRepository commentRepository;
	
	@Autowired
	private PostRepository postRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	
	@Override // 댓글 작성
	public void createReply(CommentReq comment) {
//		comment.setCommnetRegDate(LocalDateTime.now());
//		User user = userRepository.findById(comment.getUserId());
//		Post post = postRepository.findById(comment.getPostId());
		
//		Comment entity = comment.toEntity(user, post);
		commentRepository.insertWriting(comment);
	}

	@Override // 단일 댓글 삭제
	public void deleteFindOne(Long commentId) {
		commentRepository.deleteOne(commentId);
	}

	@Override // 댓글 조회
	@Transactional(readOnly = true)
	public List<Comment> viewReply(Post postId) {
		return commentRepository.findComment(postId);
	}
}
