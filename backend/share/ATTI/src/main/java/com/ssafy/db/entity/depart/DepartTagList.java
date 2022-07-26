package com.ssafy.db.entity.depart;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.ssafy.db.entity.user.User;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class DepartTagList {
	
	@Id
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="depart_id")
	private Depart depart;

	@Id
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="depart_tag_id")
	private DepartTag departTag;
}