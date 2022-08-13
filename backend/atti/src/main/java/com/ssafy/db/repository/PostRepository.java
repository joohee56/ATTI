package com.ssafy.db.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssafy.db.entity.depart.Category;
import com.ssafy.db.entity.depart.Depart;
import com.ssafy.db.entity.depart.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long>{
	List<Post> findByDepartAndCategoryOrderByPostIdDesc(Depart depart, Category category);
}
