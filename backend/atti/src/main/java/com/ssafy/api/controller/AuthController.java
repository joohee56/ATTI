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
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.request.AuthPhoneReq;
import com.ssafy.api.request.KakaoUser;
import com.ssafy.api.request.UserFindIdReq;
import com.ssafy.api.request.UserLoginPostReq;
import com.ssafy.api.response.UserDepartRes;
import com.ssafy.api.response.UserLoginRes;
import com.ssafy.api.service.AuthService;
import com.ssafy.api.service.UserService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.common.util.AuthPhoneUtil;
import com.ssafy.common.util.JwtTokenUtil;
import com.ssafy.db.entity.depart.UserDepart;
import com.ssafy.db.entity.user.User;
import com.ssafy.db.repository.UserRepository;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiParam;
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
		
		// 로그인 요청한 유저로부터 입력된 패스워드와 디비에 저장된 유저의 암호화된 패스워드가 같은 값인지 확인 (유효한 패스워드인지 여부 확인)
		if(passwordEncorder.matches(password, user.getPassword())) {
			// 0. 탈퇴한 회원인지 확인
			if(user.isUserDeleteInfo()==true)
				return ResponseEntity.status(404).body(UserLoginRes.failOf(404, "탈퇴한 회원입니다."));
			
			// 1. 가입한 채널 리스트 가져옴
			List<UserDepartRes> userDepartList = userService.getDepartList(userId);
			
			// 2. 가입한 채널 리스트의 첫 번째 카테고리 리스트를 가져옴
			List<Integer> userCategoryList;
			if(userDepartList != null) {
				userCategoryList = new ArrayList<Integer>();
				
				Long departId = userDepartList.get(0).getDepartId();	// 가입한 채널 중 첫 번째 채널의 아이디
				// departId 에 해당하는 Depart 가져옴
				// 카테고리 중 Depart 에 해당하는 Category 가져옴
				
			} else {
				userCategoryList = null;
			}
			
			// 3. 첫 번쨰 카테고리에 해당하는 글 목록
			
			// 4. 유저 아이디가 가입한 채널의 유저 권한 테이블의 아이디와 매칭되는지를 찾음
			boolean admin = false;
			// departID 에 해당하는 depart 가져옴
			// user 와 depart 를 adminRole 에서 일치하는 adminRole 을 가져옴 
			// 있다면 관리자, 없다면 일반 학생
			
			// 5. 유저 이름 가져옴
			String userName = user.getUserName();
			
			return ResponseEntity.ok(UserLoginRes.of(200, "Success", JwtTokenUtil.getToken(userId), userDepartList, userCategoryList, admin, userName));	//토큰 넘김
		}
		
		// 유효하지 않는 패스워드인 경우, 로그인 실패로 응답.
		return ResponseEntity.status(401).body(UserLoginRes.failOf(401, "Invalid Password"));
	}
	
	@GetMapping("/test")
	public void test(@RequestParam String userId) {
		System.out.println("===============================");
		System.out.println("test 실행됨");
		System.out.println("===============================");
//		List<UserDepart> departList = userService.getDepartList(userId);
//		if(!departList.isEmpty()) {
//			System.out.println("null");
//			System.out.println("result : " + departList.get(0).getUser().getUserId());
//		}else {
//			System.out.println("result : " + null);
//		}
		
//		User user = userRepository.findOne(userId);
//		System.out.println("result : " + user.getUserId());
	}
	
	// 카카오로그인
	@GetMapping("/login/kakao")
    public ResponseEntity<UserLoginRes> redirectkakao(@RequestParam String code, HttpSession session) throws IOException {
        System.out.println("code:: " + code);

        // 접속토큰 get
        String kakaoToken = authService.getReturnAccessToken(code);
        
        // 접속자 정보 get
        Map<String, Object> result = authService.getUserInfo(kakaoToken);
//        log.info("result:: " + result);
        String snsId = (String) result.get("id");
//        String userName = (String) result.get("nickname");
//        String email = (String) result.get("email");
        String userpw = snsId;
        
        System.out.println("SNS ID : " + snsId);
        // 분기
        KakaoUser kakaoUser = new KakaoUser();
//         일치하는 snsId 없을 시 회원가입
        System.out.println(userService.findKakaoId(snsId));
//        List<User> userList = userService.findKakaoId(snsId);
//        if (userList.isEmpty()) {
////            log.warn("카카오로 회원가입");
////        	kakaoUser.setUserId(email);
//        	kakaoUser.setPassword(userpw);
////        	kakaoUser.setUserName(userName);
//        	kakaoUser.setSnsId(snsId);
////        	kakaoUser.setEmail(email);
//            userService.signUpKakao(kakaoUser);
//        }

        // 일치하는 snsId가 있으면 멤버객체에 담음.
//        log.warn("카카오로 로그인");
//        String userid = memberService.findUserIdBy2(snsId);
//        MemberVO vo = memberService.findByUserId(userid);
////        log.warn("member:: " + vo);
//            /*Security Authentication에 붙이는 과정*/
//        CustomUser user = new CustomUser(vo);
////        log.warn("user : " + user);
//        List<GrantedAuthority> roles = CustomUser.getList(vo);
//        Authentication auth = new UsernamePasswordAuthenticationToken(user, null, roles);
////        log.warn("auth : " + auth);
//        SecurityContextHolder.getContext().setAuthentication(auth);
//
//        /* 로그아웃 처리 시, 사용할 토큰 값 */
//        session.setAttribute("kakaoToken", kakaoToken);
//
//        return "redirect:/";
        //snsId 에 해당하는 아이디 가져옴
        String userId = snsId;
        
        return null;
//        return ResponseEntity.ok(UserLoginPostRes.of(200, "Success", JwtTokenUtil.getToken(userId)));	//토큰 넘김
    }

	
	// 휴대폰 인증
	@CrossOrigin("*")
	@PostMapping("/phone")
	private ResponseEntity<?> authPhone(@RequestBody AuthPhoneReq phoneNumberInfo) {
		String phoneNumber = phoneNumberInfo.getPhoneNumber();
		
		if(phoneNumber.isEmpty() || phoneNumber.equals("")) {
			System.out.println("핸드폰 번호를 입력해 주세요.");
			
			return ResponseEntity.status(404).body(BaseResponseBody.of(404, "핸드폰 번호를 입력해 주세요."));
		}
		
		// 핸드폰 번호 중복 체크 
		boolean okPhone = userService.phoneCheck(phoneNumber);
		if(!okPhone) {
			return ResponseEntity.status(401).body(BaseResponseBody.of(401, "이미 가입된 아이디가 있습니다. 아이디를 찾고 싶으시면 아이디 찾기를 진행해 주세요."));
		}
			
		String fromNumber = "01059368015";
		String verifyCode = makeVerifyCode();  // 인증 키 생성
		
		if(fromNumber.equals(""))
			return ResponseEntity.status(500).body(BaseResponseBody.of(500, "발신번호가 막혔습니다."));
		
		// 문자 보냄
		userService.sendSMS(phoneNumber, fromNumber, verifyCode);
		
//			//code session 에 저장
//			session.setAttribute("code", verifyCode);
		
		// redis 에 code 저장
		userService.setRedisStringValue("code", verifyCode);
		
		
		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "인증번호가 전송되었습니다. 받으신 인증번호를 입력하고 확인 버튼을 눌러 주세요."));
	}
	
	// 사용자가 인증번호 전송
	@GetMapping("/phone/authCode")
	private ResponseEntity<?> authPhoneCode(@RequestParam("code") String code) {
//			String correctCode = (String)session.getAttribute("code");
		
		// redis 에 저장되어 있는 코드 가져옴
		String correctCode = userService.getRedisStringValue("code");
		
		// 인증번호가 일치하는지 검증
		if(code.equals(correctCode)) {
//			session.removeAttribute("code");
			
			// redis 에 저장되어 있는 코드 삭제해야 함
			

//				session.removeAttribute("code");

			return ResponseEntity.status(200).body(BaseResponseBody.of(200, "인증되었습니다."));
		} else {
			return ResponseEntity.status(401).body(BaseResponseBody.of(401, "인증번호가 다릅니다."));
		}
	}
	
	// 랜덤 숫자 생성
	public String makeVerifyCode() {
	    Random rand = new Random();
	    String numStr = "";
	    for (int i = 0; i < 6; i++) {
	        String ran = Integer.toString(rand.nextInt(10));
	        numStr += ran;
	    }
	    return numStr;
	}

}








