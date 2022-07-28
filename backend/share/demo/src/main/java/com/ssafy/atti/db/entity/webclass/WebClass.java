package com.ssafy.atti.db.entity.webclass;

import java.util.ArrayList;
import java.util.Date;
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
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.ssafy.atti.db.entity.chat.ChatRoom;
import com.ssafy.atti.db.entity.depart.Depart;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class WebClass {
	
	@Id @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="webclass_id")
	private Long webclaassId;
	
	@Temporal(TemporalType.TIMESTAMP) 
	@Column(name="webclass_start_time")
	private Date webclassStartTime;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="webclass_end_time")
	private Date webclassEndTime;
	
	@OneToMany(mappedBy = "webclass")
    private List<Attendance> attendances = new ArrayList<>();
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="depart_id")
	private Depart depart;
	
	@OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "course_id")
	private Course cousre;
	
	
	@OneToOne(mappedBy="webclass", fetch=FetchType.LAZY)
	private ChatRoom chatroom;
	
}
