package com.ssafy.db.entity.user;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter @Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Auth {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="auth_id")
	private Long authId;
	
	@JsonIgnore // pwd는 숨겨진 채로 데이터가 전달됨
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private String pwd;
	
	@Column(name="login_id")
	private String loginId;
	
	@OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "user_id")
	private User user;
}
