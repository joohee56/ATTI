package com.ssafy.db.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.db.entity.depart.Depart;

@Repository
@Transactional
public class DepartRepository {
	
	@PersistenceContext
	private EntityManager em;
	
	// 채널 생성
	public void createChannel(Depart depart) {
		em.persist(depart);
	}
	
	// 채널 입장
	public Depart joinChannel(Long departCode) {
		Depart channel = em.createQuery("select d from Depart d where d.departCode = :departCode", Depart.class)
				.setParameter("departCode", departCode)
				.getSingleResult();
		return channel;
	}
}
