package com.ssafy.db.repository;

import javax.persistence.EntityManager;

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
}
