CREATE DATABASE  IF NOT EXISTS `atti` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `atti`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: i7b107.p.ssafy.io    Database: atti
-- ------------------------------------------------------
-- Server version	8.0.30-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `post_id` bigint NOT NULL AUTO_INCREMENT,
  `post_ano_info` bit(1) DEFAULT NULL,
  `post_com_ban_info` bit(1) DEFAULT NULL,
  `post_content` longtext,
  `post_reg_date` datetime(6) DEFAULT NULL,
  `post_title` longtext,
  `post_upd_date` datetime(6) DEFAULT NULL,
  `category_id` bigint DEFAULT NULL,
  `depart_id` bigint DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`post_id`),
  KEY `FKg6l1ydp1pwkmyj166teiuov1b` (`category_id`),
  KEY `FKjvd4ky2ctm9dv7blhbykscmm0` (`depart_id`),
  KEY `FK72mt33dhhs48hf9gcqrq4fxte` (`user_id`),
  CONSTRAINT `FK72mt33dhhs48hf9gcqrq4fxte` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKg6l1ydp1pwkmyj166teiuov1b` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`),
  CONSTRAINT `FKjvd4ky2ctm9dv7blhbykscmm0` FOREIGN KEY (`depart_id`) REFERENCES `depart` (`depart_id`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (3,_binary '\0',_binary '\0','<p>오늘 수업은 휴강입니다.</p>','2022-08-18 13:21:45.371000','휴강 안내',NULL,6,2,'hyjei10'),(5,_binary '\0',_binary '\0','<p>안녕하세요 학생 여러분!</p>','2022-08-18 13:29:52.107000','출석확인','2022-08-18 13:56:47.482000',6,2,'hyjei10'),(6,_binary '\0',_binary '\0','<p>22.08.20 자료 업로드 합니다.</p>','2022-08-18 13:31:29.427000','22.08.20 자료',NULL,8,2,'hyjei10'),(7,_binary '\0',_binary '\0','<p>오늘 1시간 늦게 일어났더니 전공 필수인거 3학점만 성공했어…ㅠㅠ</p>','2022-08-18 13:32:00.883000','수강 신청 3학점 성공함ㅠㅠ','2022-08-18 13:34:28.034000',9,2,'dustnzlzl'),(8,_binary '',_binary '\0','<p>역사 동아리 이순신 신입 동아리원 모집합니다~!</p>','2022-08-18 13:34:35.987000','동아리 홍보',NULL,9,2,'hyjei10'),(9,_binary '\0',_binary '\0','<p>학교 근처 하늘백반집 괜찮음?</p>','2022-08-18 13:35:04.629000','혼밥 할 곳 추천 받는다',NULL,9,2,'dustnzlzl'),(10,_binary '\0',_binary '\0','<p>20학번 김철수 입니다. 잘부탁드려요~!!</p>','2022-08-18 13:35:07.681000','안녕하세요',NULL,9,2,'hyjei10'),(11,_binary '',_binary '\0','<p>기초 글쓰기 족보 찾습니다. 사례하겠습니다 ㅜㅜ</p>','2022-08-18 13:35:41.965000','족보 찾아요',NULL,9,2,'hyjei10'),(12,_binary '',_binary '\0','<p>저희 새터 이번주 토요일 맞나요~?</p>','2022-08-18 13:36:20.524000','일정 질문',NULL,9,2,'hyjei10'),(14,_binary '',_binary '\0','<p>방학기간을 맞이해 창업동아리 부원을 모집합니다</p>','2022-08-18 13:44:18.327000','창업동아리 모집',NULL,9,2,'dustnzlzl'),(15,_binary '\0',_binary '\0','<p>2시 50분까지 미리 접속해 주세요</p>','2022-08-18 14:02:37.595000','오늘 3시 개인 발표 있습니다',NULL,11,3,'dustnzlzl'),(16,_binary '\0',_binary '\0','<p>22.08.18 출석 확인 바랍니다</p>','2022-08-18 14:03:18.024000','출석확인 해주세요',NULL,11,3,'dustnzlzl'),(17,_binary '\0',_binary '','<p>수업실에 4주차 시간표 올려뒀습니다</p>','2022-08-18 14:05:41.797000','8월 4주차 수업 안내',NULL,11,3,'dustnzlzl'),(18,_binary '\0',_binary '','<p>자유게시판에 가입인사 남겨주세요!!</p>','2022-08-18 14:19:23.846000','가입인사',NULL,6,2,'hyjei10'),(20,_binary '\0',_binary '\0','<p>반가워요!</p>','2022-08-18 14:42:08.158000','한학기 동안 잘 부탁드립니다.',NULL,9,2,'jeongjin'),(21,_binary '\0',_binary '','2022년08월18일 14시45분51초 에 작성된 게시물입니다.','2022-08-18 14:45:51.745000','질문있어요~',NULL,7,2,'hyjei10'),(22,_binary '\0',_binary '','2022년08월18일 14시45분52초 에 작성된 게시물입니다.','2022-08-18 14:45:52.874000','이 서비스 잘 되는 거 맞나요?',NULL,7,2,'gusxosmsdy'),(23,_binary '\0',_binary '\0','<p>잠시만~~~~~ 안녕~~~~</p>','2022-08-18 15:09:26.317000','아령하세요~~~잇',NULL,9,2,'tenbeom'),(25,_binary '\0',_binary '','2022년08월18일 17시24분21초 에 작성된 게시물입니다.','2022-08-18 17:24:21.362000','자바스크립트와 타입스크립트의 차이점이 궁금합니다.',NULL,7,2,'gusxosmsdy'),(30,_binary '\0',_binary '\0','<p>동아리 전용 게시판 개설했습니다. 확인해주세요~</p>','2022-08-18 17:27:10.777000','동아리 게시판 개설',NULL,6,2,'hyjei10'),(31,_binary '\0',_binary '','2022년08월18일 17시27분34초 에 작성된 게시물입니다.','2022-08-18 17:27:38.301000','\n교수님 리액트와 뷰의 차이점이 무엇인가요?',NULL,7,2,'jeongjin'),(32,_binary '\0',_binary '\0','<p>안녕하세요! 반갑습니다!</p>','2022-08-18 17:44:20.233000','자유게시판에 처음 왔습니다.',NULL,9,2,'jeongjin'),(33,_binary '',_binary '\0','<p>작성자가 보이지 않습니다!</p>','2022-08-18 17:44:47.975000','익명으로 글을 쓰면',NULL,9,2,'jeongjin'),(34,_binary '',_binary '\0','<p>익명으로 글을 작성하게 되면 작성자가 보이지 않습니다.</p>','2022-08-18 17:45:31.679000','이 글은 익명입니다.',NULL,9,2,'jeongjin'),(35,_binary '\0',_binary '\0','<p>여러분 환영합니다!</p>','2022-08-18 17:47:44.947000','공지사항은 관리자만 작성할 수 있습니다.',NULL,23,5,'jeongjin'),(36,_binary '\0',_binary '\0',NULL,'2022-08-19 01:59:33.659000','',NULL,31,6,'holy_killer@naver.com'),(37,_binary '\0',_binary '\0','<p>가입인사입니다.반갑습니다.</p>','2022-08-19 02:52:21.973000','반갑습니다.',NULL,9,2,'hyjei10'),(38,_binary '\0',_binary '\0','<p>반가워요!</p>','2022-08-19 02:55:58.206000','SSAFY7에 오신걸 환영합니다!',NULL,43,9,'jeong7'),(39,_binary '\0',_binary '\0','<p>제육 vs 돈까스</p>','2022-08-19 02:58:01.344000','오늘 점심 뭐 먹을까',NULL,41,8,'rladustn'),(43,_binary '\0',_binary '\0','<p>교수님 오늘 리눅스 유닉스 차이에 대해 궁금합니다</p>','2022-08-19 03:00:07.077000','리눅스 유닉스 차이가 뭔가요',NULL,39,8,'rladustn'),(44,_binary '\0',_binary '\0','<p>학교 주변으로만 받는다</p>','2022-08-19 03:01:12.166000','혼밥 할 곳 추천 받는다',NULL,41,8,'rladustn'),(47,_binary '\0',_binary '\0','<p>학생 상담 서포터즈 ‘울림’입니다! 이벤트 행사 하고 있으니 오늘 3시 중앙공원에 많이 와주세요</p>','2022-08-19 03:01:55.023000','학생 상담 서포터즈',NULL,41,8,'rladustn'),(49,_binary '\0',_binary '\0','<p>운동 좀 가르쳐줄사람</p><p>나 초보임</p>','2022-08-19 03:02:33.176000','운동하기 너무 어렵다',NULL,41,8,'rladustn'),(52,_binary '\0',_binary '\0','<p>독서와 생활</p><p>슬기로운 생활</p><p>있습니다</p>','2022-08-19 03:03:07.316000','1학년 교양 교재 팝니다',NULL,41,8,'rladustn'),(69,_binary '\0',_binary '\0','<p>반갑습니다. 안녕하세요,</p>','2022-08-19 03:17:53.739000','여기는 공지사항 글쓰기 입니다.',NULL,6,2,'hyjei10'),(72,_binary '\0',_binary '','2022년08월19일 03시27분06초 에 작성된 게시물입니다.','2022-08-19 03:27:06.725000','질문입니다.',NULL,7,2,'hyjei10'),(73,_binary '\0',_binary '','2022년08월19일 03시27분35초 에 작성된 게시물입니다.','2022-08-19 03:27:35.433000','자바와 스프링 부트와의 연관성이 궁금합니다',NULL,7,2,'gusxosmsdy'),(74,_binary '\0',_binary '','2022년08월19일 03시29분00초 에 작성된 게시물입니다.','2022-08-19 03:29:00.579000','저도 발표하고 싶습니다',NULL,7,2,'gusxosmsdy'),(75,_binary '\0',_binary '\0','<p>오늘 처음 왔어요!</p>','2022-08-19 03:45:32.380000','안녕하세요',NULL,46,9,'jeong7');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-19  9:35:42
