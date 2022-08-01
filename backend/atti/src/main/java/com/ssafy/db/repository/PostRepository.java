package com.ssafy.db.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import com.ssafy.db.entity.depart.Post;

@Repository
public class PostRepository {
	
	@PersistenceContext
	private EntityManager em;
	
	// 글쓰기
	public void insertWriting(Post post) {
		em.persist(post);
	}
	
	// 게시글 전체 조회
	public List<Post> findAll() {
		List<Post> result = em.createQuery("select p from Post as p", Post.class).getResultList();
		return result;
	}
	
	// 게시글 전체 삭제
//	public void List<Post> deleteAll(Post post) {
//		em.remove(post);
//	}
	
	
	public Post findOne(Long postId) {
		Post result = em.createQuery("select p from Post as p where p.post_id = :postId", Post.class)
				.setParameter("postId", postId)
				.getSingleResult();
		return result;
	}
	
	
	// 이름으로 게시글 검색 / 조회
	public List<Post> findByName(String name) {
		return em.createQuery("select p from Post as p where p.user_id = :name", Post.class)
				.setParameter("name", name)
				.getResultList();
	}
	
	
}
