package com.ssafy.db.entity.user;

import java.util.Date;

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
public class Profile {
	
	@Id @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="profile_id")
	private Long profilId;
	
	@Column(name="profile_origin")
	private Long profileOrigin;
	
	@Column(name="profile_new")
	private Long profileNew;
	
	@Column(name="profile_folder")
	private Long profileFoler;
	
	@OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "user_id")
	private User user;
}
