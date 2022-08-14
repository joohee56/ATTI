package com.ssafy.api.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.api.response.CategoryListRes;
import com.ssafy.db.entity.depart.Category;
import com.ssafy.db.entity.depart.Depart;
import com.ssafy.db.repository.CategoryRepository;
import com.ssafy.db.repository.DepartRepository;

@Service
@Transactional
public class CategoryService {
	@Autowired
	DepartRepository departRepository;
	@Autowired
	CategoryRepository categoryRepository;
	
	// 채널 ID 에 해당하는 카테고리 리스트를 가져옴
	public List<CategoryListRes> getCategorList(Long departId) {
		Depart depart = departRepository.findById(departId).orElse(null);
		if(depart == null) return null;
		
		List<Category> categoryList = categoryRepository.findByDepart(depart);
		if(categoryList.isEmpty()) return null;
		
		List<CategoryListRes> dtoList = new ArrayList<>();
		for(Category c : categoryList) {
			dtoList.add(CategoryListRes.builder()
					.categoryId(c.getCategoryId())
					.categoryName(c.getCategoryName())
					.cType(c.getCtype().name()).build());
		}
		
		return dtoList;
	}
}
