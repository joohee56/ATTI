package com.ssafy.api.service;

import com.ssafy.api.request.DepartCreateReq;
import com.ssafy.api.request.DepartJoinReq;
import com.ssafy.db.entity.depart.Depart;

public interface DepartService {
	void createChannel(DepartCreateReq departCreateReq); // 채널 생성
	
	String joinChannel(Long departId); // 채널 입장
	
	String departCodeCheck();
}
