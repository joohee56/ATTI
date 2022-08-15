package com.ssafy.api.service;

import java.util.List;

import com.ssafy.api.request.CategoryCreateReq;
import com.ssafy.api.response.CategoryListRes;
import com.ssafy.db.entity.depart.Category;

public interface CategoryService {
	
	void createCategory(CategoryCreateReq categoryCreateReq); // 카테고리 생성
	
	List<CategoryListRes> getCategorList(Long departId); // 채널 ID에 해당하는 카테고리 리스트 가져오기
	Category getByCategoryId(Long categoryId);
}
