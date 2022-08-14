package com.ssafy.api.service;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.api.request.DepartCreateReq;
import com.ssafy.db.entity.depart.Depart;
import com.ssafy.db.entity.user.User;
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
	public void createChannel(DepartCreateReq departCreateReq) { //, String userId

		int leftLimit = 48; // numeral '0'
		int rightLimit = 122; // letter 'z'
		int targetStringLength = 10;
		Random random = new Random();

		String generatedString = random.ints(leftLimit,rightLimit + 1)
		  .filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
		  .limit(targetStringLength)
		  .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
		  .toString();
		
		User user = userRepository.getById(departCreateReq.getUserId());
		Depart depart = Depart.builder()
				.departName(departCreateReq.getDepartName())
				.departCode(generatedString)
				.user(user)
				.build();
		
		departRepository.save(depart);
//		Optional<Depart> depart2 = departRepository.findById((long) 1);
//		Depart depart3 = departRepository.findById((long)1).orElse(null);
		
		// 무덤
//		depart.setDepartCode(generatedString);
//		depart.setUser(userRepository.findById(userId));
	}

	@Override // 채널 입장
	public String joinChannel(String departCode) {
		if(departRepository.findByDepartCode(departCode) != null) {
			return "SUCCESS";
		} else {
			return "FAIL";
		}
	}
	

}
