package com.ssafy.db.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.db.entity.depart.Comment;

@Repository
@Transactional
public class CommentRepository {
	
	@PersistenceContext
	private EntityManager em;
	
	// 댓글 작성
	public void insertWriting(Comment comment) {
		em.persist(comment);
	}
	
}
