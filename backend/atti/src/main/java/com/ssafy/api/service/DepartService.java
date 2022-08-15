package com.ssafy.api.service;

import com.ssafy.api.request.DepartCreateReq;
import com.ssafy.api.request.DepartJoinReq;
import com.ssafy.api.response.DepartCreateRes;
import com.ssafy.db.entity.depart.Depart;

public interface DepartService {
	DepartCreateRes createChannel(DepartCreateReq departCreateReq); // 채널 생성
	
	String joinChannel(String departCode); // 채널 입장
	
}
