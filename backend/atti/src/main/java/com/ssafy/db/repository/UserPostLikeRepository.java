package com.ssafy.db.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.db.entity.depart.UserPostLike;

@Repository
@Transactional
public class UserPostLikeRepository {

	@PersistenceContext
	private EntityManager em;
	
	// 게시글 좋아요~
//	public void postLike() {
//		
//	}
}
