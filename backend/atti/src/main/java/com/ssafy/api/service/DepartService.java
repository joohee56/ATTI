package com.ssafy.api.service;

import com.ssafy.api.request.DepartCreateReq;
import com.ssafy.api.request.DepartJoinReq;
import com.ssafy.db.entity.depart.Depart;

public interface DepartService {
	Long createChannel(DepartCreateReq departCreateReq); // 채널 생성
	
	String joinChannel(String departCode); // 채널 입장
	
}
