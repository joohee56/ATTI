//package com.ssafy.api.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.ssafy.db.entity.depart.Post;
//import com.ssafy.db.repository.AdminRepository;
//
//@Service("adminService")
//
//public class AdminServiceImpl implements AdminService{
//	
//	@Autowired
//	AdminRepository adminRepository;
//	
//	@Override
//	public Post getAdminPostList() {
//		Post post = adminRepository.findAllByPost().get(0);
//		return post;
//	}
//
//}
