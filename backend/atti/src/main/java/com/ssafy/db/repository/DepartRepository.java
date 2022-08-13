package com.ssafy.db.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

<<<<<<< HEAD
// import com.ssafy.api.request.DepartCreateReq;
=======
>>>>>>> c23ccc711daea50ce75c5c4818f22ca34f1c859b
import com.ssafy.db.entity.depart.Depart;

@Repository
@Transactional
public class DepartRepository{
	
	@PersistenceContext
	private EntityManager em;
	
	// 채널 생성
	/*
	 * public void createChannel(DepartCreateReq departCreateReq) {
	 * em.persist(departCreateReq); }
	 */
	
	// 채널 입장
	public Depart joinChannel(Long departId) {
		Depart channel = em.createQuery("select d from Depart d where d.departId = :departId", Depart.class)
				.setParameter("departId", departId)
				.getSingleResult();
		return channel;
	}
	
/*
 * public interface DepartRepository extends JpaRepository<Depart, Long>{
 * Optional<Depart> findByDepartName(String departName);
 * 
 * }
 */
