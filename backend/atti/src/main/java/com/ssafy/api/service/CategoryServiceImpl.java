package com.ssafy.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.api.request.CategoryCreateReq;
import com.ssafy.db.entity.depart.Category;
import com.ssafy.db.entity.depart.Ctype;
import com.ssafy.db.entity.depart.Depart;
import com.ssafy.db.entity.user.User;
import com.ssafy.db.repository.CategoryRepository;
import com.ssafy.db.repository.DepartRepository;
import com.ssafy.db.repository.UserRepository;

@Service
@Transactional
public class CategoryServiceImpl implements CategoryService {
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	@Autowired
	private DepartRepository departRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public void createCategory(CategoryCreateReq categoryCreateReq) {
		Depart depart = departRepository.findById(categoryCreateReq.getDepartId()).orElse(null);
		User user = userRepository.findById(categoryCreateReq.getUserId()).orElse(null);
		
 		System.out.println("=====================");
 		System.out.println(categoryCreateReq.getType());
		System.out.println("=====================");
		
		Category category = Category.builder()
				.categoryName(categoryCreateReq.getCategoryName())
				.categoryAnoInfo(categoryCreateReq.isCategoryAnoInfo())
				.categoryComInfo(categoryCreateReq.isCategoryComAnoInfo())
				.categoryComAnoInfo(categoryCreateReq.isCategoryComAnoInfo())
				.ctype(categoryCreateReq.getType())
				.depart(depart)
				.user(user)
				.build();
		
		categoryRepository.save(category);
	}

}
