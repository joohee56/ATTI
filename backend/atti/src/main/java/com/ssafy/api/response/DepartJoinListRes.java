package com.ssafy.api.response;

import java.util.ArrayList;
import java.util.List;

import com.ssafy.common.model.response.BaseResponseBody;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DepartJoinListRes extends BaseResponseBody{
	private List<CategoryListRes> categoryList = new ArrayList<CategoryListRes>();
	
	public static DepartJoinListRes of(Integer statusCode, String message, List<CategoryListRes> categoryList) {
		DepartJoinListRes res = new DepartJoinListRes();
		res.setStatusCode(statusCode);
		res.setMessage(message);
		res.setCategoryList(categoryList);
		return res;
	}
	
}
