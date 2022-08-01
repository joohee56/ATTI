package com.ssafy.api.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import com.ssafy.db.entity.depart.Post;
import com.ssafy.db.repository.PostRepository;

@Service
@Transactional(readOnly = true) // readOnly true를 사용하면 읽기 최적화
public class PostServiceImpl implements PostService {
	
	@Autowired
	private PostRepository postRepository;

	@Override // 글쓰기
	@Transactional // 쓰기가 필요할땐 그냥 Transactional
	public void createWriting(Post post) {
		postRepository.insertWriting(post);
	}

	@Override // 게시글 전체 조회
	public List<Post> viewAllPosts() {
		return postRepository.findAll();
	}

	@Override // 게시글 상세 조회
	public Post viewFindOne(Long postId) {
		return postRepository.findOne(postId);
	}

	@Override // 이름으로 게시글 검색
	public List<Post> viewByName(String name) {
		return postRepository.findByName(name);
	}
}
