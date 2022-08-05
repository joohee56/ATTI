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
	
	public Depart joinChannel() {
		
		return null;
	}
}
