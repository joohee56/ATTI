package com.ssafy.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.db.entity.user.User;
import com.ssafy.db.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
public class UserService {

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	PasswordEncoder passwordEncorder;
	
	public void signUp(User user) {
		// 보안을 위해서 유저 패스워드 암호화하여 디비에 저장
		user.setPassword(passwordEncorder.encode(user.getPassword()));
		userRepository.signUp(user);
	}
	
	public User getUserByUserId(String userId) {
		List<User> userList = userRepository.findById(userId);
		if(userList.isEmpty()) return null;
		return userList.get(0);
	}
	
	public User getUserByUserName(String userName) {
		List<User> userList = userRepository.findByName(userName);
		if(userList.isEmpty()) return null;
		return userList.get(0);
	}
	
	public String findId(String userEmail) {
		List<User> userList = userRepository.findByEmail(userEmail);
		if(userList.isEmpty()) return null;
		return userList.get(0).getUserId();
	}
	
	
	
	
//	private void validateDuplicateMember(User user) {
//    	List<User> findUsers = userRepository.findById(user.getUserId());
//    	if(!findUsers.isEmpty()) {	// 중복된 회원이라면
//    		throw new IllegalStateException("이미 존재하는 회원입니다.");
//    	}
//    }
//    
//    // 회원 전체 조회
//    public List<User> findMembers(){
//    	return userRepository.findAll();
//    }
//    
//    public User findOne(String memberId) {
//    	return userRepository.findOne(memberId);
//    }

}
