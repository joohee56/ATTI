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
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `comment_id` bigint NOT NULL AUTO_INCREMENT,
  `comment_ano_info` bit(1) DEFAULT NULL,
  `comment_content` longtext,
  `comment_delete_info` bit(1) DEFAULT NULL,
  `comment_group` int DEFAULT NULL,
  `comment_level` int DEFAULT NULL,
  `comment_reg_date` datetime(6) DEFAULT NULL,
  `seq` bit(1) NOT NULL,
  `post_id` bigint DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `FKs1slvnkuemjsq2kj4h3vhx7i1` (`post_id`),
  KEY `FK8kcum44fvpupyw6f5baccx25c` (`user_id`),
  CONSTRAINT `FK8kcum44fvpupyw6f5baccx25c` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKs1slvnkuemjsq2kj4h3vhx7i1` FOREIGN KEY (`post_id`) REFERENCES `post` (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,_binary '\0','1빠 ㅎㅎ',_binary '\0',0,0,'2022-08-18 13:44:00.463000',_binary '\0',9,'hyjei10'),(2,_binary '','하늘 백반집 별로에요ㅠ',_binary '\0',0,0,'2022-08-18 13:44:11.641000',_binary '\0',9,'hyjei10'),(3,_binary '','저는 추천합니다~',_binary '\0',0,0,'2022-08-18 13:45:12.210000',_binary '\0',9,'hyjei10'),(4,_binary '\0','넵 교수님',_binary '\0',0,0,'2022-08-18 14:18:53.685000',_binary '\0',5,'hyjei10'),(5,_binary '\0','교수님 안녕하세요!',_binary '\0',0,0,'2022-08-18 14:19:01.632000',_binary '\0',5,'dustnzlzl'),(6,_binary '','안녕하세요 교수님',_binary '\0',0,0,'2022-08-18 14:19:01.916000',_binary '\0',5,'hyjei10'),(7,_binary '\0','안녕하세요! 가입인사 남깁니다!',_binary '\0',0,0,'2022-08-18 14:20:00.117000',_binary '\0',18,'dustnzlzl'),(8,_binary '\0','안녕하세요!',_binary '\0',0,0,'2022-08-18 14:42:05.615000',_binary '\0',18,'gusxosmsdy'),(9,_binary '\0','어떤 질문인가요?',_binary '\0',1,0,'2022-08-18 14:47:18.625000',_binary '',22,'hyjei10'),(10,_binary '\0','반갑습니다!',_binary '\0',0,0,'2022-08-18 15:10:05.367000',_binary '\0',20,'tenbeom'),(11,_binary '\0','100만원줘',_binary '\0',0,0,'2022-08-18 15:12:52.433000',_binary '\0',11,'tenbeom'),(12,_binary '\0','타입스크립트는 타입을 미리 지정하여 대규모 프로젝트를 개발할 때 도움을 받을 수 있습니다.',_binary '\0',1,0,'2022-08-18 17:24:53.904000',_binary '',25,'hyjei10'),(13,_binary '\0','리액트는 자바스크립트 라이브러리이고 리액트는 자바스크립트 프레임워크입니다.',_binary '\0',1,0,'2022-08-18 17:27:59.095000',_binary '',31,'hyjei10'),(14,_binary '\0','만나서 반가워요!',_binary '\0',0,0,'2022-08-18 17:44:30.839000',_binary '\0',23,'jeongjin'),(15,_binary '','익명 댓글 또한 보이지 않습니다.',_binary '\0',0,0,'2022-08-18 17:45:42.563000',_binary '\0',34,'jeongjin'),(72,_binary '\0','다음 시간에 답변해드리겠습니다.',_binary '\0',1,0,'2022-08-19 03:27:48.569000',_binary '',73,'hyjei10');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
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
