package com.ssafy.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.db.entity.message.UserMessage;
import com.ssafy.db.repository.MessageRepository;

@Service
@Transactional
public class MessageServiceImpl implements MessageService {

	@Autowired
	private MessageRepository messageRepository;
	
	@Override // 전체 메세지 조회
	public List<UserMessage> viewAllMessage(Long userMessageId) {
		
		return messageRepository.allMessage(userMessageId);
	}

}
