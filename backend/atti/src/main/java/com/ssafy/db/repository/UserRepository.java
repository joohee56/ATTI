package com.ssafy.db.repository;

import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PostMapping;

import com.ssafy.api.request.UserFindIdReq;
import com.ssafy.db.entity.user.User;

import lombok.RequiredArgsConstructor;

/*
 * 유저 모델 관련 디비 쿼리 생성을 위한 구현 정의
 */
@Repository
public class UserRepository {
	
	@Autowired
	EntityManager em;
	
	public void signUp(User user) {
		em.persist(user);
	}
	
	public List<User> findById(String userId){
//		String jpql = "SELECT b FROM Book b ";
//		TypedQuery<Book> query = em.createQuery(jpql, Book.class);
		
		return em.createQuery("select u from User u where u.userId = :userId", User.class).setParameter("userId", userId).getResultList();
	}
	
	public List<User> findByName(String name){
		return em.createQuery("select u from User u where u.user_name = :name", User.class).setParameter("name", name).getResultList();
	}
	
	public List<User> findId(UserFindIdReq findIdInfo){
		String name = findIdInfo.getName();
		String email = findIdInfo.getEmail();
		Date birth = findIdInfo.getBirth();
		
		return em.createQuery("select u from User u where u.name = :name and u.email = :email and u.birth = birth", User.class).setParameter("name", name).setParameter("email", email).setParameter("birth", birth).getResultList();
	}
	
	public User IdCheck(String userId) {
		return em.find(User.class, userId);
	}
		
//	public User findOne(String id) {
//		return em.find(User.class, id);
//	}
//    
//	public List<User> findAll(){
//		return em.createQuery("select m from Member m", User.class).getResultList();
//	}
}
