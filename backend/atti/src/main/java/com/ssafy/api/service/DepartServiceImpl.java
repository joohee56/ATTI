package com.ssafy.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.db.entity.depart.Depart;
import com.ssafy.db.repository.DepartRepository;

@Service
@Transactional
public class DepartServiceImpl implements DepartService {
	
	@Autowired
	private DepartRepository departRepository;
	
	@Override // 채널 생성
	public void createChannel(Depart depart) {
		departRepository.createChannel(depart);
	}

}
