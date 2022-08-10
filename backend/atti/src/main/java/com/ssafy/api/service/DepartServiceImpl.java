package com.ssafy.api.service;

import java.nio.charset.Charset;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.db.entity.depart.Depart;
import com.ssafy.db.repository.DepartRepository;
import com.ssafy.db.repository.UserRepository;

@Service
@Transactional
public class DepartServiceImpl implements DepartService {
	
	@Autowired
	private DepartRepository departRepository;
	@Autowired
	private UserRepository userRepository;
	
	@Override // 채널 생성
	public void createChannel(Depart depart) { //, String userId
		departRepository.createChannel(depart);

		int leftLimit = 48; // numeral '0'
		int rightLimit = 122; // letter 'z'
		int targetStringLength = 10;
		Random random = new Random();

		String generatedString = random.ints(leftLimit,rightLimit + 1)
		  .filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
		  .limit(targetStringLength)
		  .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
		  .toString();
	
		depart.setDepartCode(generatedString);
//		depart.setUser(userRepository.findById(userId));
	}

	@Override // 채널 입장
	public Depart joinChannel(String departCode) {
		return departRepository.joinChannel(departCode);
	}

}
