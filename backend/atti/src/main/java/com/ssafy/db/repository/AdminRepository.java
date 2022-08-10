package com.ssafy.db.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssafy.db.entity.depart.Category;
import com.ssafy.db.entity.depart.Post;
import com.ssafy.db.entity.depart.UserDepart;
import com.ssafy.db.entity.user.User;
import com.ssafy.db.entity.webclass.Attendance;

import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.db.entity.depart.Post;

// 사용 엔티티명, 해당 클래스의 pk 타입

@Repository
@Transactional
public class AdminRepository {

	@Autowired
	EntityManager em;
	
	// 채널 회원 목록 조회
	public List<UserDepart> findAll(Long departId) {
		List<UserDepart> result = em.createQuery("select ud from UserDepart as ud where ud.depart=:departId", UserDepart.class)
				.setParameter("departId", departId)
				.getResultList();
		return result;
	}

	public void deleteCategory(Long categoryId) {
		Category result = em.createQuery("select c from Category as c where c.categoryId = :categoryId", Category.class)
				.setParameter("categoryId", categoryId)
				.getSingleResult();
		em.remove(result);
	}

	public void editAttend(Attendance editAttend) {
		Attendance originAttend = em.createQuery("select a from attendance as a where a.attendanceId = :attendanceId",
				Attendance.class)
				.setParameter("attendanceId", editAttend.getAttendanceId())
				.getSingleResult();
		
		originAttend.setAttendancdContent(editAttend.getAttendancdContent());

		
	}

	@PersistenceContext
	private EntityManager em;
	
	// 게시글 전체 조회
	public List<Post> findAll() {
		List<Post> result = em.createQuery("select p from Post as p", Post.class).getResultList();
		return result;
	}

}
