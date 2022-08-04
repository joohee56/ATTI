package com.ssafy.api.service;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import com.ssafy.api.request.KakaoUser;
import com.ssafy.api.request.UserFindIdReq;
import com.ssafy.common.util.AuthPhoneUtil;
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
	
	@Autowired
	AuthPhoneUtil authPhoneUtil;
	
	public void signUp(User user) {
		// 보안을 위해서 유저 패스워드 암호화하여 디비에 저장
		user.setPassword(passwordEncorder.encode(user.getPassword()));
		userRepository.signUp(user);
	}
	
	// 카카오로 회원가입
	public void signUpKakao(KakaoUser user) {
		// 보안을 위해서 유저 패스워드 암호화하여 디비에 저장
		user.setPassword(passwordEncorder.encode(user.getPassword()));
		userRepository.signUpKakao(user);
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
	
	public List<User> findId(UserFindIdReq findIdInfo) {
		return userRepository.findId(findIdInfo);
	}
	
	// 카카오로 회원가입했는 지 확인
	public List<User> findKakaoId(String userId) {
		return userRepository.findKakaoId(userId);
	}
	
	public User IdCheck(String userId) {
		return userRepository.IdCheck(userId);
	}
	
	// 핸드폰 중복 검사
	public boolean phoneCheck(String phoneNumber) {
		List<User> userList = userRepository.phoneCheck(phoneNumber);
		if(userList.isEmpty()) return true;
		return false;
	}
	
	// SMS 전송
	public void sendSMS(String phoneNumber, String fromNumber, String verifyCode) {
		authPhoneUtil.sendSMS(phoneNumber, fromNumber, verifyCode);	// SMS 전송
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
