//package com.ssafy.api.service;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import com.ssafy.api.response.AdminListRes;
//import com.ssafy.db.entity.depart.Depart;
//import com.ssafy.db.entity.depart.Post;
//import com.ssafy.db.entity.depart.UserDepart;
//import com.ssafy.db.entity.webclass.Attendance;
//import com.ssafy.db.repository.AdminMemberRepository;
//import com.ssafy.db.repository.AdminRepository;
//
//
//@Service
//@Transactional(readOnly = true) // readOnly true를 사용하면 읽기 최적화
//public class AdminServiceImpl implements AdminService{
//
//	// @Autowired
//	AdminRepository adminRepository;
//	
////	@Override
////	public List<AdminListRes> viewAllUsers(Long departId){
////		
////		Optional<Depart> depart = adminRepository.findById(departId);
////	    List<UserDepart> entitylist = AdminMemberRepository.findAllByDepart(depart);
////	    List<AdminListRes> list = new ArrayList<>();
////	    
////	    for (UserDepart member : entitylist){
////	        list.add(new AdminListRes(member);)
////	    }
////	    
////	    return list;
////	}
//
////	@Override
////	public void deleteCategory(Long categoryId) {
////		adminRepository.deleteCategory(categoryId);
////		
////	}
//
////	@Override
////	public void editAttend(Attendance editAttend) {
////		adminRepository.editAttend(editAttend);
////		
////	}
//	
////	@Override // 게시글 전체 조회
////	public List<Post> getAdminPostList() {
////		return adminRepository.findAll();
////	}
//
//	@Override
//	public void editAttend(Attendance editAttend) {
//		// TODO Auto-generated method stub
//		
//	}
//
//	@Override
//	public void deleteCategory(Long categoryId) {
//		// TODO Auto-generated method stub
//		
//	}
//
//	@Override
//	public List<Post> getAdminPostList() {
//		// TODO Auto-generated method stub
//		return null;
//	}
//	
//}
//
//
///*@Service
//@Transactional(readOnly = true)
//public class AdminServiceImpl implements AdminService {
//	
//	@Autowired
//	private AdminRepository adminRepository;
//
//
//
//}*/
