package com.ssafy.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.db.entity.depart.UserDepart;
import com.ssafy.db.entity.webclass.Attendance;
import com.ssafy.db.repository.AdminRepository;

import com.ssafy.db.entity.depart.Post;
import com.ssafy.db.repository.AdminRepository;

@Service
@Transactional(readOnly = true) // readOnly true를 사용하면 읽기 최적화
public class AdminServiceImpl implements AdminService{

	@Autowired
	AdminRepository adminRepository;
	
	@Override
	public List<UserDepart> viewAllUsers(Long departId) {
		return adminRepository.findAll(departId);
	}

	@Override
	public void deleteCategory(Long categoryId) {
		adminRepository.deleteCategory(categoryId);
		
	}

	@Override
	public void editAttend(Attendance editAttend) {
		adminRepository.editAttend(editAttend);
		
	}



@Service
@Transactional(readOnly = true)
public class AdminServiceImpl implements AdminService {
	
	@Autowired
	private AdminRepository adminRepository;

	@Override // 게시글 전체 조회
	public List<Post> getAdminPostList() {
		return adminRepository.findAll();
	}


}
