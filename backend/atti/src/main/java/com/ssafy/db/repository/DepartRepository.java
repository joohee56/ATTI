package com.ssafy.db.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.api.request.DepartCreateReq;
import com.ssafy.db.entity.depart.Depart;
import com.ssafy.db.entity.user.User;

@Repository
@Transactional
public class DepartRepository{
	
	@PersistenceContext
	private EntityManager em;
	
	// 채널 생성
	public void createChannel(DepartCreateReq departCreateReq) {
		em.persist(departCreateReq);
	}
	
	// 채널 입장
	public Depart joinChannel(Long departId) {
		Depart channel = em.createQuery("select d from Depart d where d.departId = :departId", Depart.class)
				.setParameter("departId", departId)
				.getSingleResult();
		return channel;
	}
}
