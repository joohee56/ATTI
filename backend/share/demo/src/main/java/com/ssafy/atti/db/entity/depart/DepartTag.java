package com.ssafy.atti.db.entity.depart;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

import com.ssafy.atti.db.entity.user.User;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class DepartTag {
	
	@Id @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="depart_tag_id")
	private Long departTagId;
	
	@Column(name="depart_tag_id")
	private String departTagName;
	
	@OneToMany(mappedBy = "departTag")
	private List<DepartTagList> departTagLists = new ArrayList<>();
}
