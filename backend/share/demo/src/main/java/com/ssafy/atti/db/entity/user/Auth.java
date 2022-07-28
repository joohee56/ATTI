package com.ssafy.atti.db.entity.user;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Auth {
	
	@Id @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="auth_id")
	private Long authId;
	
	private String pwd;
	
	@Column(name="login_id")
	private String loginId;
	
	@OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "user_id")
	private User user;
}
