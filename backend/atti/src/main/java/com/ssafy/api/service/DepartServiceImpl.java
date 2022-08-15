package com.ssafy.api.service;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.api.request.DepartCreateReq;
import com.ssafy.api.response.DepartCreateRes;
import com.ssafy.db.entity.depart.Category;
import com.ssafy.db.entity.depart.Depart;
import com.ssafy.db.entity.depart.UserDepart;
import com.ssafy.db.entity.user.AdminRole;
import com.ssafy.db.entity.user.User;
import com.ssafy.db.repository.AdminRoleRepository;
import com.ssafy.db.repository.CategoryRepository;
import com.ssafy.db.repository.DepartRepository;
import com.ssafy.db.repository.UserDepartRepository;
import com.ssafy.db.repository.UserRepository;

@Service
@Transactional
public class DepartServiceImpl implements DepartService {
	
	@Autowired
	private DepartRepository departRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	@Autowired
	private AdminRoleRepository adminRoleRepository;
	
	@Autowired
	private UserDepartRepository userDepartRepository;
	
	@Override // 채널 생성
	public DepartCreateRes createChannel(DepartCreateReq departCreateReq) { //, String userId

		int leftLimit = 48; // numeral '0'
		int rightLimit = 122; // letter 'z'
		int targetStringLength = 10;
		Random random = new Random();

		String generatedString = random.ints(leftLimit,rightLimit + 1)
		  .filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
		  .limit(targetStringLength)
		  .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
		  .toString();
		
		User user = userRepository.findById(departCreateReq.getUserId()).orElse(null);
		
		Depart createDepart = Depart.builder()
				.departName(departCreateReq.getDepartName())
				.departCode(generatedString)
				.user(user)
				.build();
		
		Long departId = departRepository.save(createDepart).getDepartId();
		
		// 관리자 설정
		AdminRole role = AdminRole.builder().depart(createDepart).user(user).build();
		adminRoleRepository.save(role);
		
		// 채널 가입
		UserDepart ud = UserDepart.builder().depart(createDepart).user(user).build();
		userDepartRepository.save(ud);
		
		// 카테고리 생성
		Category category1 = Category.builder()
				.categoryName("공지사항")
				.categoryAnoInfo(false)
				.ctype("NOTICE")
				.user(user)
				.depart(createDepart)
				.build();
		
		Category category2 = Category.builder()
				.categoryName("질문1")
				.categoryAnoInfo(true)
				.ctype("FREE")
				.user(user)
				.depart(createDepart)
				.build();
		
		Category category3 = Category.builder()
				.categoryName("질문1")
				.categoryAnoInfo(true)
				.ctype("FREE")
				.user(user)
				.depart(createDepart)
				.build();
		
		Category category4 = Category.builder()
				.categoryName("질문1")
				.categoryAnoInfo(true)
				.ctype("FREE")
				.user(user)
				.depart(createDepart)
				.build();
		
		Long categoryId = categoryRepository.save(category1).getCategoryId();
		categoryRepository.save(category2);
		categoryRepository.save(category3);
		categoryRepository.save(category4);
//		Optional<Depart> depart2 = departRepository.findById((long) 1);
//		Depart depart3 = departRepository.findById((long)1).orElse(null);
		
		// 무덤
//		depart.setDepartCode(generatedString);
//		depart.setUser(userRepository.findById(userId));
		
		return new DepartCreateRes(departId, categoryId);
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
