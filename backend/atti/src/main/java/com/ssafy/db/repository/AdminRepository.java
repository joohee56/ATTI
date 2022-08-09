package com.ssafy.db.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.db.entity.depart.Post;

// 사용 엔티티명, 해당 클래스의 pk 타입
@Repository
@Transactional
public class AdminRepository {
	
	@PersistenceContext
	private EntityManager em;
	
	// 게시글 전체 조회
	public List<Post> findAll() {
		List<Post> result = em.createQuery("select p from Post as p", Post.class).getResultList();
		return result;
	}
}
