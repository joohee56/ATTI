package com.ssafy.api.request;

import javax.persistence.Entity;

import lombok.*;

@Getter
@Setter
public class KakaoUser {
	private String userId;
	private String snsId;
	private String email;
	private String password;
	private String userName;
}