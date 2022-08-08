package com.ssafy.api.service;

import com.ssafy.db.entity.depart.Depart;

public interface DepartService {
	void createChannel(Depart depart); // 채널 생성
	
	Depart joinChannel(String departCode); // 채널 입장
}
