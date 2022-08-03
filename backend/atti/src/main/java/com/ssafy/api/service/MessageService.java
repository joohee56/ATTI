package com.ssafy.api.service;

import java.util.List;

import com.ssafy.db.entity.message.Message;

public interface MessageService {
	List<Message> viewAllMessage(); // 메세지 전체 조회
	
}
