package com.ssafy.api.service;

import java.util.List;

import com.ssafy.db.entity.depart.Post;

public interface PostService {
	void createWriting(Post post); // 글쓰기
	
	List<Post> viewAllPosts(); // 게시글 전체 조회
	
	Post viewFindOne(Long postId); // 게시글 상세 조회
	
	List<Post> viewByName(String name); // 이름으로 게시글 검색 / 조회
	
}
