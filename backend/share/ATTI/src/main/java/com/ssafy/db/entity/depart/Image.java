package com.ssafy.db.entity.depart;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.ssafy.db.entity.user.User;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Image {
	
	@Id @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="image_id")
	private Long imageId;
	
	@Column(name="image_origin")
	private Long imageOrigin;
	
	@Column(name="image_new")
	private Long imageNew;
	
	@Column(name="image_folder")
	private Long imageFoler;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="post_id")
	private Post post;
}
