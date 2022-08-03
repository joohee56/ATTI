package com.ssafy.db.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.ssafy.db.entity.message.Message;

@Repository
@Transactional
public class MessageRepository {
	
	@PersistenceContext
	private EntityManager em;
	
	// 쪽지 보내기
	public void sendMessage() {
		
	}
	
	// 쪽지 전체 조회
	public List<Message> allMessage() {
		List<Message> messageBox = em.createQuery("select m from Message m", Message.class)
				.getResultList();
		return messageBox;
	}
}
