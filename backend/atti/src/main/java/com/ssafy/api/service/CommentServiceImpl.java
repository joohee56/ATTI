package com.ssafy.api.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.api.request.CommentWriteReq;
import com.ssafy.api.response.CommentViewReplyRes;
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
	public void createReply(CommentWriteReq commentWriteReq) {
//		User user = userRepository.findById(comment.getUserId());
//		Post post = postRepository.findById(comment.getPostId());
		
//		Comment entity = comment.toEntity(user, post);
//		commentRepository.insertWriting(comment);
		commentWriteReq.setCommentRegDate(LocalDateTime.now());
		
		Post post = postRepository.findById(commentWriteReq.getPostId()).orElse(null);
		User user = userRepository.findById(commentWriteReq.getUserId()).orElse(null);
		
		Comment comment = Comment.builder()
				.commentAnoInfo(commentWriteReq.isCommentAnoInfo())
				.commentContent(commentWriteReq.getCommentContent())
				.commentDeleteInfo(commentWriteReq.isCommentDeleteInfo())
				.commentRegDate(commentWriteReq.getCommentRegDate())
				.commentGroup(commentWriteReq.getCommentGroup())
				.commentLevel(commentWriteReq.getCommentLevel())
				.seq(commentWriteReq.isSeq())
				.user(user)
				.post(post)
				.build();
		
		commentRepository.save(comment);
	}

	@Override // 단일 댓글 삭제
	public void deleteFindOne(Long commentId) {
		commentRepository.deleteById(commentId);
	}

	@Override // 댓글 조회
	@Transactional(readOnly = true)
	public List<CommentViewReplyRes> viewReply(Long postId) {
//		return commentRepository.findComment(postId);
		Post post = postRepository.findById(postId).orElse(null);
		List<Comment> commentList = commentRepository.findByPostOrderByCommentIdDesc(post);
		
		List<CommentViewReplyRes> commentViewReplyRes;
		if(commentList.isEmpty()) return null;
		else commentViewReplyRes = new ArrayList<CommentViewReplyRes>();
		
		for(Comment c : commentList) {
			commentViewReplyRes.add(new CommentViewReplyRes(c));
		}
		return commentViewReplyRes;
	}
}
