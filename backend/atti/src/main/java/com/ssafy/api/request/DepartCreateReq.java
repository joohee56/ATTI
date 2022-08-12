package com.ssafy.api.request;

import com.ssafy.db.entity.depart.Depart;
import com.ssafy.db.entity.user.User;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DepartCreateReq {
	
	private String departName;
	
	private String userId;
	
	@Builder
	public DepartCreateReq(String departName, String userId) {
		this.departName = departName;
		this.userId = userId;
	}
	
	public Depart toEntity(User user) {
		return Depart.builder()
				.departName(departName)
				.user(user)
				.build();
	}
}
