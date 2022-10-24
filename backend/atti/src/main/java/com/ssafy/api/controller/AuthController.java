package com.ssafy.api.controller;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.Map;
import java.util.Random;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.request.AuthPhoneReq;
import com.ssafy.api.request.KakaoUser;
import com.ssafy.api.request.LoginAutoReq;
import com.ssafy.api.request.UserFindIdReq;
import com.ssafy.api.request.UserLoginPostReq;
import com.ssafy.api.response.CategoryListRes;
import com.ssafy.api.response.PostViewAllRes;
import com.ssafy.api.response.UserDepartRes;
import com.ssafy.api.response.UserKakaoLoginRes;
import com.ssafy.api.response.UserLoginRes;
import com.ssafy.api.service.AdminRoleService;
import com.ssafy.api.service.AuthService;
import com.ssafy.api.service.CategoryService;
import com.ssafy.api.service.DepartService;
import com.ssafy.api.service.PostService;
import com.ssafy.api.service.UserService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.common.util.AuthPhoneUtil;
import com.ssafy.common.util.JwtTokenUtil;
import com.ssafy.db.entity.depart.Depart;
import com.ssafy.db.entity.depart.UserDepart;
import com.ssafy.db.entity.user.User;
import com.ssafy.db.repository.UserRepository;

//import io.swagger.annotations.Api;
//import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;

/*
 * 인증 관련 API 요청 처리를 위한 컨트롤러 정의
 */
//@Api(value = "인증 API", tags = {"Auth."})
@RestController
@RequestMapping("/auth")
public class AuthController {
	
	@Autowired
	UserService userService;
	@Autowired
	AuthService authService;
	@Autowired
	CategoryService categoryService;
	@Autowired
	AdminRoleService adminRoleService;
	@Autowired
	PostService postService;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	PasswordEncoder passwordEncorder;
	
	// 일반 로그인
	@PostMapping("/login/normal")
	public ResponseEntity<UserLoginRes> login(@RequestBody UserLoginPostReq loginInfo){
		
		String userId = loginInfo.getUserId();
		String password = loginInfo.getPassword();
		
		User user = userService.findByUserId(userId);
		// 가입된 아이디를 찾을 수 없음
		if(user == null) 
			return ResponseEntity.status(404).body(UserLoginRes.failOf(404, "가입된 아이디가 없습니다."));
		
		// 0. 탈퇴한 회원인지 확인
		if(user.isUserDeleteInfo()==true)
			return ResponseEntity.status(404).body(UserLoginRes.failOf(404, "탈퇴한 회원입니다."));
					
		// 1. 로그인 요청한 유저로부터 입력된 패스워드와 디비에 저장된 유저의 암호화된 패스워드가 같은 값인지 확인 (유효한 패스워드인지 여부 확인)
		if(passwordEncorder.matches(password, user.getPassword())) {
			
			// 2. 가입한 채널 리스트 가져옴
			List<UserDepartRes> userDepartList = userService.getDepartList(userId);
			
			// 3. 가입한 채널 리스트의 첫 번째 카테고리 리스트를 가져옴
			List<CategoryListRes> userCategoryList;
			boolean admin = false;
			Long departId=(long) 0;
			
			if(userDepartList != null) {
				departId = userDepartList.get(0).getDepartId();	// 가입한 채널 중 첫 번째 채널의 아이디
				
				userCategoryList = categoryService.getCategoryList(departId);
				
				// 3. 유저 아이디가 가입한 채널의 유저 권한 테이블의 아이디와 매칭되는지를 찾음
				admin = adminRoleService.getAdminRole(user, departId);
			} else {
				userCategoryList = null;
			}
			
			// 4. 첫 번쨰 카테고리에 해당하는 글 목록
			List<PostViewAllRes> postList;
			if(userCategoryList != null) {
				postList = new ArrayList<PostViewAllRes>();
				postList = postService.viewAllPosts(departId, userCategoryList.get(0).getCategoryId(), userId);
			} else 
				postList = null;
			
			// 5. 유저 이름 가져옴
			String userName = user.getUserName();
			
			return ResponseEntity.ok(UserLoginRes.of(200, "Success", JwtTokenUtil.getToken(userId), userDepartList, userCategoryList, postList, admin, userName));	//토큰 넘김
		}
		
		// 유효하지 않는 패스워드인 경우, 로그인 실패로 응답.
		return ResponseEntity.status(401).body(UserLoginRes.failOf(401, "Invalid Password"));
	}
	
	// 자동 로그인 -> 나중에 수정 예정
	@PostMapping("/auto")
	public ResponseEntity<UserLoginRes> autoLogin(@RequestBody LoginAutoReq loginAutoReq){
		String userId = loginAutoReq.getUserId();
		User user = userService.findByUserId(userId);
		// 가입된 아이디를 찾을 수 없음
		if(user == null) 
			return ResponseEntity.status(404).body(UserLoginRes.failOf(404, "가입된 아이디가 없습니다."));
		
		// 0. 탈퇴한 회원인지 확인
		if(user.isUserDeleteInfo()==true)
			return ResponseEntity.status(404).body(UserLoginRes.failOf(404, "탈퇴한 회원입니다."));
		
		// 1. 가입한 채널 리스트 가져옴
		List<UserDepartRes> userDepartList = userService.getDepartList(userId);
		
		// 2. 가입한 채널 리스트의 첫 번째 카테고리 리스트를 가져옴
		// 3. 유저 아이디가 가입한 채널의 유저 권한 테이블의 아이디와 매칭되는지를 찾음
		List<CategoryListRes> userCategoryList;
		boolean admin = false;
		Long departId=(long) 0;
		
		if(userDepartList != null) {
			departId = userDepartList.get(0).getDepartId();	// 가입한 채널 중 첫 번째 채널의 아이디
			
			userCategoryList = categoryService.getCategoryList(departId);
			admin = adminRoleService.getAdminRole(user, departId);
		} else {
			userCategoryList = null;
		}
		
		// 4. 첫 번쨰 카테고리에 해당하는 글 목록
		List<PostViewAllRes> postList;
		if(userCategoryList != null) {
			postList = new ArrayList<PostViewAllRes>();
			postList = postService.viewAllPosts(departId, userCategoryList.get(0).getCategoryId(), userId);
		} else 
			postList = null;
		
		// 5. 유저 이름 가져옴
		String userName = user.getUserName();
		
		return ResponseEntity.ok(UserLoginRes.of(200, "Success", JwtTokenUtil.getToken(userId), userDepartList, userCategoryList, postList, admin, userName));	//토큰 넘김
	}
	
	// 카카오로그인
	@GetMapping("/login/kakao")
    public ResponseEntity<? extends BaseResponseBody> redirectkakao(@RequestParam String code, HttpSession session) throws IOException {
        System.out.println("code:: " + code);

        // 접속토큰 get
        String kakaoToken = authService.getReturnAccessToken(code);
        
        // 접속자 정보 kakao 에게서 get
        Map<String, Object> result = authService.getUserInfo(kakaoToken);
        
        // 다른 항목들은 막혀있음
        String snsId = (String) result.get("id");
        String userName = (String) result.get("nickname");
        String email = (String) result.get("email");
        String birthday = (String) result.get("birthday");
        
        System.out.println("SNS ID : " + snsId);
        
//      일치하는 snsId 없을 시 회원가입
        User user = userService.findKakaoId(snsId).orElse(null);
        
        System.out.println(userService.findKakaoId(snsId));
        
        if(user == null) {
        	KakaoUser kakaoUser = new KakaoUser(snsId, email, userName, birthday);
        	userService.signUpKakao(kakaoUser);
        } 

        // 로그인 정보 response
        user = userService.findByUserId(snsId);
        // 0. 탈퇴한 회원인지 확인
 		if(user.isUserDeleteInfo()==true)
 			return ResponseEntity.status(404).body(BaseResponseBody.of(404, "탈퇴한 회원입니다."));
     		
 		// 1. 가입한 채널 리스트 가져옴
 			List<UserDepartRes> userDepartList = userService.getDepartList(snsId);
 			
		// 2. 가입한 채널 리스트의 첫 번째 카테고리 리스트를 가져옴
		// 3. 유저 아이디가 가입한 채널의 유저 권한 테이블의 아이디와 매칭되는지를 찾음
		List<CategoryListRes> userCategoryList;
		boolean admin = false;
		Long departId=(long) 0;
		
		if(userDepartList != null) {
			departId = userDepartList.get(0).getDepartId();	// 가입한 채널 중 첫 번째 채널의 아이디
			
			userCategoryList = categoryService.getCategoryList(departId);
// 					admin = adminRoleService.getAdminRole(user, departId);
		} else {
			userCategoryList = null;
		}
		
		// 4. 첫 번쨰 카테고리에 해당하는 글 목록
		List<PostViewAllRes> postList;
		if(userCategoryList != null) {
			postList = new ArrayList<PostViewAllRes>();
			postList = postService.viewAllPosts(departId, userCategoryList.get(0).getCategoryId(), snsId);
		} else 
			postList = null;
		
		// 5. 유저 이름 가져옴
		String kakaoUserName = user.getUserName();
		
		return ResponseEntity.ok(UserKakaoLoginRes.of(200, "Success", kakaoToken, userDepartList, userCategoryList, postList, admin, userName, snsId));	//토큰 넘김	
	}

}
