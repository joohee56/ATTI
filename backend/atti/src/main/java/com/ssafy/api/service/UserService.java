package com.ssafy.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.db.entity.user.User;
import com.ssafy.db.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {

	private final UserRepository userRepository;
	
//	PasswordEncoder passwordEncorder;
	
	public void signUp(User user) {
		// 보안을 위해서 유저 패스워드 암호화하여 디비에 저장
//		user.setPassword(passwordEncoder.encode(userRegisterInfo.getPassword()));
		userRepository.signUp(user);
	}
	
	private void validateDuplicateMember(User user) {
    	List<User> findUsers = userRepository.findById(user.getUserId());
    	if(!findUsers.isEmpty()) {	// 중복된 회원이라면
    		throw new IllegalStateException("이미 존재하는 회원입니다.");
    	}
    }
    
    // 회원 전체 조회
    public List<User> findMembers(){
    	return userRepository.findAll();
    }
    
    public User findOne(String memberId) {
    	return userRepository.findOne(memberId);
    }

}
