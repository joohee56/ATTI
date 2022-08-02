package com.ssafy.db.repository;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PostMapping;

import com.ssafy.db.entity.user.User;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class UserRepository {
	
	private final EntityManager em;
	
	public void signUp(User user) {
		em.persist(user);
	}
	
	public User findOne(String id) {
		return em.find(User.class, id);
	}
    
	public List<User> findAll(){
		return em.createQuery("select m from Member m", User.class).getResultList();
	}
	
	public List<User> findById(String userId){
		return em.createQuery("select m from Member m where m.user_id = :userId", User.class).setParameter("userId", userId).getResultList();
	}
	
	public List<User> findByName(String name){
		return em.createQuery("select m from Member m where m.name = :name", User.class).setParameter("name", name).getResultList();
	}
}
