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

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.db.entity.user.Auth;
import com.ssafy.db.entity.user.User;

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
public class Image {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
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
