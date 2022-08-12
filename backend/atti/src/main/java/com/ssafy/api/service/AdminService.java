package com.ssafy.api.service;

import java.util.List;

import com.ssafy.db.entity.depart.Post;
import com.ssafy.db.entity.depart.UserDepart;

public interface AdminService {
	
	// 채널 회원 목록 조회
	List<UserDepart> viewAllUsers(Long departId);

	// 카테고리 삭제
	void deleteCategory(Long categoryId);
	
	List<Post> getAdminPostList(); // 전체 게시글 조회

//	void editAttend(Attendance editAttend);

}
/*public interface AdminService {
	

}
*/