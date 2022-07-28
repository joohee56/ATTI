package com.ssafy.atti.db.entity.depart;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class File {
	
	@Id @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="file_id")
	private Long fileId;
	
	@Column(name="file_origin")
	private Long fileOrigin;
	
	@Column(name="file_new")
	private Long fileNew;
	
	@Column(name="file_folder")
	private Long fileFoler;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="post_id")
	private Post post;
}
