package com.ssafy.db.entity.depart;

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
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class File {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
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
	
	public void setPost(Post post) {
		this.post = post;
		post.getFiles().add(this);
	}
}
