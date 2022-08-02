package com.ssafy.api.service;

import java.util.List;

import com.ssafy.db.entity.depart.Post;

public interface PostService {
	void createWriting(Post post); // 글쓰기
	
	List<Post> viewAllPosts(); // 게시글 전체 조회
	
	Post viewFindOne(Long postId); // 게시글 상세 조회
	
	List<Post> viewByName(String name); // 이름으로 게시글 검색 / 조회 (아직 쓸지말지 몰라서 컨트롤러에서 구현안했음)
	
	void deleteFindOne(Long postId); // 단일 게시글 삭제
	
	void deleteAll(); // 전체 게시글 삭제
	
	void editPost(Post editPost); // 단일 게시글 수정
}
