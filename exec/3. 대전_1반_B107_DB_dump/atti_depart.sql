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
-- Table structure for table `depart`
--

DROP TABLE IF EXISTS `depart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `depart` (
  `depart_id` bigint NOT NULL AUTO_INCREMENT,
  `depart_code` varchar(255) DEFAULT NULL,
  `depart_name` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`depart_id`),
  KEY `FK95fq96g4p7bunej6rtlmeql75` (`user_id`),
  CONSTRAINT `FK95fq96g4p7bunej6rtlmeql75` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `depart`
--

LOCK TABLES `depart` WRITE;
/*!40000 ALTER TABLE `depart` DISABLE KEYS */;
INSERT INTO `depart` VALUES (1,'JqAGqHRvkm','안녕하세요','test1234'),(2,'V84PgHCl2D','일공칠','hyjei10'),(3,'enXoBlse87','싸피7기','dustnzlzl'),(4,'pKCumcqTbg','새로운 채널을 만듭니다.','jeongjin'),(5,'y5w88XaiVi','SSAFY 8기','jeongjin'),(6,'ZkLtlInDmr','7기상추밭모임','holy_killer@naver.com'),(7,'aCQu5vYOxR','','holy_killer@naver.com'),(8,'fOMXtLg0n6','독서동아리','dustnzlzl'),(9,'oBKRk7MpL5','SSAFY7','jeong7'),(10,'FgVwq42ASx','현태채널','gusxosmsdy'),(11,'iGVKTHB00X','내채널1','gusxosmsdy2'),(12,'CEGovWY0QM','ㄴㄹㄴㄹ','gusxosmsdy2'),(13,'bhBIYUv7fw','SSSAFY','hyjei100'),(14,'35yn1qfKrk','SSSSAFYY','hyjei10'),(15,'sKoyzUSzhE','역사동아리 이순신','hyjei1000'),(16,'xjzv60Px8z','봉사동아리','hyjei10'),(17,'sB4Rp2sjeO','ssafy7기','gusxosmsdy@naver.com'),(18,'XQFrmHaMww','안녕하세요','gusxosmsdy'),(19,'BkLfsQk0vI','싸피학과','dustnzlzl'),(20,'N6PMdKMM3P','아띠대학교','dustntn'),(21,'CC5dTGRA3d','아띠 7기','jeong7'),(22,'d55A0yMc6B','싸피대학교','dustntn'),(23,'CcBQUWDZE1','SSAFY 100기','doohui96@naver.com');
/*!40000 ALTER TABLE `depart` ENABLE KEYS */;
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
