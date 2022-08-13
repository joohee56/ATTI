package com.ssafy.db.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.db.entity.user.User;

public interface UserRepository extends JpaRepository<User, String> {

}
