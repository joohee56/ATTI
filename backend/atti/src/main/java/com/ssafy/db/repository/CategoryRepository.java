package com.ssafy.db.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.db.entity.depart.Category;
import com.ssafy.db.entity.depart.Depart;

public interface CategoryRepository extends JpaRepository<Category, Long> {
	public List<Category> findByDepart(Depart depart);

//	public void deleteFindOne(Long categoryId);
}
