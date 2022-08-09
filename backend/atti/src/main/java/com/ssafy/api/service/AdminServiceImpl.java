package com.ssafy.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.db.entity.depart.Post;
import com.ssafy.db.repository.AdminRepository;

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
