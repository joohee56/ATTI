package com.ssafy.db.entity.depart;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.db.entity.message.UserMessage;
import com.ssafy.db.entity.user.Auth;
import com.ssafy.db.entity.user.User;
import com.ssafy.db.entity.user.UserRole;

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
public class Category {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="category_id")
	private Long categoryId;
	
	@Column(name="category_name")
	private String categoryName;
	
	@Enumerated(EnumType.STRING)
	private Ctype ctype;
	
	@Column(name="category_ano_info")
	private boolean categoryAnoInfo;
	
	@Column(name="category_com_info")
	private boolean categoryComInfo;
	
	@Column(name="category_com_ano_info")
	private boolean categoryComAnoInfo;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_id")
	private User user;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="depart_id")
	private Depart depart;
	
	@OneToMany(mappedBy = "category")
    private List<Post> posts = new ArrayList<>();
	
	public void setUser(User user) {
		this.user = user;
		user.getCategorys().add(this);
	}
	
	public void setDepart(Depart depart) {
		this.depart = depart;
		depart.getCategorys().add(this);
	}
	

}
