package com.ssafy.db.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.ssafy.db.entity.message.Message;
import com.ssafy.db.entity.message.UserMessage;

@Repository
@Transactional
public class MessageRepository {
	
	@PersistenceContext
	private EntityManager em;
	
	// 쪽지 보내기
	public void sendMessage() {
		
	}
	
	// 쪽지 전체 조회
	public List<UserMessage> allMessage(Long userMessageId) {
		List<UserMessage> messageBox = em.createQuery("select m from UserMessage as m where m.userMessageId = :userMessageId", UserMessage.class)
				.setParameter("userMessageId", userMessageId)
				.getResultList();
		return messageBox;
	}
}
