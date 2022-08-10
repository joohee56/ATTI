package com.ssafy.api.service;

import java.util.List;


import com.ssafy.db.entity.depart.UserDepart;
import com.ssafy.db.entity.user.User;
import com.ssafy.db.entity.webclass.Attendance;
import com.ssafy.db.entity.depart.Post;

public interface AdminService {
	
	// 채널 회원 목록 조회
	List<UserDepart> viewAllUsers(Long departId);

	// 카테고리 삭제
	void deleteCategory(Long categoryId);




public interface AdminService {
	
	List<Post> getAdminPostList(); // 전체 게시글 조회


}
