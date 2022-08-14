package com.ssafy.api.response;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class CategoryListRes {
	private Long categoryId;
	private String categoryName;
	private String cType;
}
