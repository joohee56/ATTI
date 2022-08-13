package com.ssafy.db.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.db.entity.depart.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

}
