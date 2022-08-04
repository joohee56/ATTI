package com.ssafy.api.service;

import java.util.List;

import com.ssafy.db.entity.message.Message;
import com.ssafy.db.entity.message.UserMessage;

public interface MessageService {
	List<UserMessage> viewAllMessage(Long userMessageId); // 메세지 전체 조회
	
}
