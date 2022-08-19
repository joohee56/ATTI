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
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `category_id` bigint NOT NULL AUTO_INCREMENT,
  `category_ano_info` bit(1) DEFAULT NULL,
  `category_com_ano_info` bit(1) DEFAULT NULL,
  `category_com_info` bit(1) DEFAULT NULL,
  `category_name` varchar(255) DEFAULT NULL,
  `ctype` varchar(255) DEFAULT NULL,
  `depart_id` bigint DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`category_id`),
  KEY `FKgrvre5x69epdod7rrh8htlc74` (`depart_id`),
  KEY `FKpfk8djhv5natgshmxiav6xkpu` (`user_id`),
  CONSTRAINT `FKgrvre5x69epdod7rrh8htlc74` FOREIGN KEY (`depart_id`) REFERENCES `depart` (`depart_id`),
  CONSTRAINT `FKpfk8djhv5natgshmxiav6xkpu` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=129 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,_binary '\0',_binary '\0',_binary '\0','공지사항','NOTICE',1,'test1234'),(2,_binary '\0',_binary '\0',_binary '\0','질문','QNA',1,'test1234'),(3,_binary '\0',_binary '\0',_binary '\0','자료실','DATA',1,'test1234'),(4,_binary '\0',_binary '\0',_binary '\0','자유게시판','FREE',1,'test1234'),(5,_binary '\0',_binary '\0',_binary '\0','수업실','TIMETABLE',1,'test1234'),(6,_binary '\0',_binary '\0',_binary '\0','공지사항','NOTICE',2,'hyjei10'),(7,_binary '\0',_binary '\0',_binary '\0','질문','QNA',2,'hyjei10'),(8,_binary '\0',_binary '\0',_binary '\0','자료실','DATA',2,'hyjei10'),(9,_binary '\0',_binary '\0',_binary '\0','자유게시판','FREE',2,'hyjei10'),(10,_binary '\0',_binary '\0',_binary '\0','수업실','TIMETABLE',2,'hyjei10'),(11,_binary '\0',_binary '\0',_binary '\0','공지사항','NOTICE',3,'dustnzlzl'),(12,_binary '\0',_binary '\0',_binary '\0','질문','QNA',3,'dustnzlzl'),(13,_binary '\0',_binary '\0',_binary '\0','자료실','DATA',3,'dustnzlzl'),(14,_binary '\0',_binary '\0',_binary '\0','자유게시판','FREE',3,'dustnzlzl'),(15,_binary '\0',_binary '\0',_binary '\0','수업실','TIMETABLE',3,'dustnzlzl'),(18,_binary '\0',_binary '\0',_binary '\0','공지사항','NOTICE',4,'jeongjin'),(19,_binary '\0',_binary '\0',_binary '\0','질문','QNA',4,'jeongjin'),(20,_binary '\0',_binary '\0',_binary '\0','자료실','DATA',4,'jeongjin'),(21,_binary '\0',_binary '\0',_binary '\0','자유게시판','FREE',4,'jeongjin'),(22,_binary '\0',_binary '\0',_binary '\0','수업실','TIMETABLE',4,'jeongjin'),(23,_binary '\0',_binary '\0',_binary '\0','공지사항','NOTICE',5,'jeongjin'),(24,_binary '\0',_binary '\0',_binary '\0','질문','QNA',5,'jeongjin'),(25,_binary '\0',_binary '\0',_binary '\0','자료실','DATA',5,'jeongjin'),(26,_binary '\0',_binary '\0',_binary '\0','자유게시판','FREE',5,'jeongjin'),(27,_binary '\0',_binary '\0',_binary '\0','수업실','TIMETABLE',5,'jeongjin'),(28,_binary '\0',_binary '\0',_binary '\0','공지사항','NOTICE',6,'holy_killer@naver.com'),(29,_binary '\0',_binary '\0',_binary '\0','질문','QNA',6,'holy_killer@naver.com'),(30,_binary '\0',_binary '\0',_binary '\0','자료실','DATA',6,'holy_killer@naver.com'),(31,_binary '\0',_binary '\0',_binary '\0','자유게시판','FREE',6,'holy_killer@naver.com'),(32,_binary '\0',_binary '\0',_binary '\0','수업실','TIMETABLE',6,'holy_killer@naver.com'),(33,_binary '\0',_binary '\0',_binary '\0','공지사항','NOTICE',7,'holy_killer@naver.com'),(34,_binary '\0',_binary '\0',_binary '\0','질문','QNA',7,'holy_killer@naver.com'),(35,_binary '\0',_binary '\0',_binary '\0','자료실','DATA',7,'holy_killer@naver.com'),(36,_binary '\0',_binary '\0',_binary '\0','자유게시판','FREE',7,'holy_killer@naver.com'),(37,_binary '\0',_binary '\0',_binary '\0','수업실','TIMETABLE',7,'holy_killer@naver.com'),(38,_binary '\0',_binary '\0',_binary '\0','공지사항','NOTICE',8,'dustnzlzl'),(39,_binary '\0',_binary '\0',_binary '\0','질문','QNA',8,'dustnzlzl'),(40,_binary '\0',_binary '\0',_binary '\0','자료실','DATA',8,'dustnzlzl'),(41,_binary '\0',_binary '\0',_binary '\0','자유게시판','FREE',8,'dustnzlzl'),(42,_binary '\0',_binary '\0',_binary '\0','수업실','TIMETABLE',8,'dustnzlzl'),(43,_binary '\0',_binary '\0',_binary '\0','공지사항','NOTICE',9,'jeong7'),(44,_binary '\0',_binary '\0',_binary '\0','질문','QNA',9,'jeong7'),(45,_binary '\0',_binary '\0',_binary '\0','자료실','DATA',9,'jeong7'),(46,_binary '\0',_binary '\0',_binary '\0','자유게시판','FREE',9,'jeong7'),(47,_binary '\0',_binary '\0',_binary '\0','수업실','TIMETABLE',9,'jeong7'),(48,_binary '\0',_binary '\0',_binary '\0','공지사항','NOTICE',10,'gusxosmsdy'),(49,_binary '\0',_binary '\0',_binary '\0','질문','QNA',10,'gusxosmsdy'),(50,_binary '\0',_binary '\0',_binary '\0','자료실','DATA',10,'gusxosmsdy'),(51,_binary '\0',_binary '\0',_binary '\0','자유게시판','FREE',10,'gusxosmsdy'),(52,_binary '\0',_binary '\0',_binary '\0','수업실','TIMETABLE',10,'gusxosmsdy'),(53,_binary '\0',_binary '\0',_binary '\0','공지사항','NOTICE',11,'gusxosmsdy2'),(54,_binary '\0',_binary '\0',_binary '\0','질문','QNA',11,'gusxosmsdy2'),(55,_binary '\0',_binary '\0',_binary '\0','자료실','DATA',11,'gusxosmsdy2'),(56,_binary '\0',_binary '\0',_binary '\0','자유게시판','FREE',11,'gusxosmsdy2'),(57,_binary '\0',_binary '\0',_binary '\0','수업실','TIMETABLE',11,'gusxosmsdy2'),(64,_binary '\0',_binary '\0',_binary '\0','공지사항','NOTICE',12,'gusxosmsdy2'),(65,_binary '\0',_binary '\0',_binary '\0','질문','QNA',12,'gusxosmsdy2'),(66,_binary '\0',_binary '\0',_binary '\0','자료실','DATA',12,'gusxosmsdy2'),(67,_binary '\0',_binary '\0',_binary '\0','자유게시판','FREE',12,'gusxosmsdy2'),(68,_binary '\0',_binary '\0',_binary '\0','수업실','TIMETABLE',12,'gusxosmsdy2'),(72,_binary '\0',_binary '\0',_binary '\0','공지사항','NOTICE',13,'hyjei100'),(73,_binary '\0',_binary '\0',_binary '\0','질문','QNA',13,'hyjei100'),(74,_binary '\0',_binary '\0',_binary '\0','자료실','DATA',13,'hyjei100'),(75,_binary '\0',_binary '\0',_binary '\0','자유게시판','FREE',13,'hyjei100'),(76,_binary '\0',_binary '\0',_binary '\0','수업실','TIMETABLE',13,'hyjei100'),(77,_binary '\0',_binary '\0',_binary '\0','공지사항','NOTICE',14,'hyjei10'),(78,_binary '\0',_binary '\0',_binary '\0','질문','QNA',14,'hyjei10'),(79,_binary '\0',_binary '\0',_binary '\0','자료실','DATA',14,'hyjei10'),(80,_binary '\0',_binary '\0',_binary '\0','자유게시판','FREE',14,'hyjei10'),(81,_binary '\0',_binary '\0',_binary '\0','수업실','TIMETABLE',14,'hyjei10'),(82,_binary '\0',_binary '\0',_binary '\0','공지사항','NOTICE',15,'hyjei1000'),(83,_binary '\0',_binary '\0',_binary '\0','질문','QNA',15,'hyjei1000'),(84,_binary '\0',_binary '\0',_binary '\0','자료실','DATA',15,'hyjei1000'),(85,_binary '\0',_binary '\0',_binary '\0','자유게시판','FREE',15,'hyjei1000'),(86,_binary '\0',_binary '\0',_binary '\0','수업실','TIMETABLE',15,'hyjei1000'),(87,_binary '\0',_binary '\0',_binary '\0','공지사항','NOTICE',16,'hyjei10'),(88,_binary '\0',_binary '\0',_binary '\0','질문','QNA',16,'hyjei10'),(89,_binary '\0',_binary '\0',_binary '\0','자료실','DATA',16,'hyjei10'),(90,_binary '\0',_binary '\0',_binary '\0','자유게시판','FREE',16,'hyjei10'),(91,_binary '\0',_binary '\0',_binary '\0','수업실','TIMETABLE',16,'hyjei10'),(92,_binary '\0',_binary '\0',_binary '\0','공지사항','NOTICE',17,'gusxosmsdy@naver.com'),(93,_binary '\0',_binary '\0',_binary '\0','질문','QNA',17,'gusxosmsdy@naver.com'),(94,_binary '\0',_binary '\0',_binary '\0','자료실','DATA',17,'gusxosmsdy@naver.com'),(95,_binary '\0',_binary '\0',_binary '\0','자유게시판','FREE',17,'gusxosmsdy@naver.com'),(96,_binary '\0',_binary '\0',_binary '\0','수업실','TIMETABLE',17,'gusxosmsdy@naver.com'),(99,_binary '\0',_binary '\0',_binary '\0','공지사항','NOTICE',18,'gusxosmsdy'),(100,_binary '\0',_binary '\0',_binary '\0','질문','QNA',18,'gusxosmsdy'),(101,_binary '\0',_binary '\0',_binary '\0','자료실','DATA',18,'gusxosmsdy'),(102,_binary '\0',_binary '\0',_binary '\0','자유게시판','FREE',18,'gusxosmsdy'),(103,_binary '\0',_binary '\0',_binary '\0','수업실','TIMETABLE',18,'gusxosmsdy'),(104,_binary '\0',_binary '\0',_binary '\0','공지사항','NOTICE',19,'dustnzlzl'),(105,_binary '\0',_binary '\0',_binary '\0','질문','QNA',19,'dustnzlzl'),(106,_binary '\0',_binary '\0',_binary '\0','자료실','DATA',19,'dustnzlzl'),(107,_binary '\0',_binary '\0',_binary '\0','자유게시판','FREE',19,'dustnzlzl'),(108,_binary '\0',_binary '\0',_binary '\0','수업실','TIMETABLE',19,'dustnzlzl'),(109,_binary '\0',_binary '\0',_binary '\0','공지사항','NOTICE',20,'dustntn'),(110,_binary '\0',_binary '\0',_binary '\0','질문','QNA',20,'dustntn'),(111,_binary '\0',_binary '\0',_binary '\0','자료실','DATA',20,'dustntn'),(112,_binary '\0',_binary '\0',_binary '\0','자유게시판','FREE',20,'dustntn'),(113,_binary '\0',_binary '\0',_binary '\0','수업실','TIMETABLE',20,'dustntn'),(114,_binary '\0',_binary '\0',_binary '\0','공지사항','NOTICE',21,'jeong7'),(115,_binary '\0',_binary '\0',_binary '\0','질문','QNA',21,'jeong7'),(116,_binary '\0',_binary '\0',_binary '\0','자료실','DATA',21,'jeong7'),(117,_binary '\0',_binary '\0',_binary '\0','자유게시판','FREE',21,'jeong7'),(118,_binary '\0',_binary '\0',_binary '\0','수업실','TIMETABLE',21,'jeong7'),(119,_binary '\0',_binary '\0',_binary '\0','공지사항','NOTICE',22,'dustntn'),(120,_binary '\0',_binary '\0',_binary '\0','질문','QNA',22,'dustntn'),(121,_binary '\0',_binary '\0',_binary '\0','자료실','DATA',22,'dustntn'),(122,_binary '\0',_binary '\0',_binary '\0','자유게시판','FREE',22,'dustntn'),(123,_binary '\0',_binary '\0',_binary '\0','수업실','TIMETABLE',22,'dustntn'),(124,_binary '\0',_binary '\0',_binary '\0','공지사항','NOTICE',23,'doohui96@naver.com'),(125,_binary '\0',_binary '\0',_binary '\0','질문','QNA',23,'doohui96@naver.com'),(126,_binary '\0',_binary '\0',_binary '\0','자료실','DATA',23,'doohui96@naver.com'),(127,_binary '\0',_binary '\0',_binary '\0','자유게시판','FREE',23,'doohui96@naver.com'),(128,_binary '\0',_binary '\0',_binary '\0','수업실','TIMETABLE',23,'doohui96@naver.com');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-19  9:35:45
