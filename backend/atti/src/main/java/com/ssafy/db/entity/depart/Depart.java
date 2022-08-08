package com.ssafy.db.entity.depart;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.ssafy.db.entity.user.User;
import com.ssafy.db.entity.webclass.Course;
import com.ssafy.db.entity.webclass.WebClass;

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
public class Depart {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="depart_id")
	private Long departId;
	
	@Column(name="depart_name")
	private String departName;
	
	@Column(name="depart_code")
	private String departCode;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_id")
	private User user;
	
	@OneToMany(mappedBy = "depart")
	private List<Course> courses = new ArrayList<>();
	
	@OneToMany(mappedBy = "depart")
    private List<Category> categorys = new ArrayList<>();

	@OneToMany(mappedBy = "depart")
    private List<WebClass> webclasses = new ArrayList<>();
	
	@OneToMany(mappedBy = "depart")
	private List<UserDepart> userDeparts = new ArrayList<>();
	
	@OneToMany(mappedBy = "depart")
	private List<DepartTagList> departTagLists = new ArrayList<>();

	public void setUser(User user) {
		this.user = user;
		user.getDeparts().add(this);
	}
	
	
}
