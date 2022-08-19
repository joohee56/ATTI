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
-- Table structure for table `user_depart`
--

DROP TABLE IF EXISTS `user_depart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_depart` (
  `user_depart_id` bigint NOT NULL AUTO_INCREMENT,
  `depart_id` bigint DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_depart_id`),
  KEY `FKpspw3tkhhkucury4a14l02qdc` (`depart_id`),
  KEY `FKn2dcpebt5ln7u9ucx0fynvgwl` (`user_id`),
  CONSTRAINT `FKn2dcpebt5ln7u9ucx0fynvgwl` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKpspw3tkhhkucury4a14l02qdc` FOREIGN KEY (`depart_id`) REFERENCES `depart` (`depart_id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_depart`
--

LOCK TABLES `user_depart` WRITE;
/*!40000 ALTER TABLE `user_depart` DISABLE KEYS */;
INSERT INTO `user_depart` VALUES (1,1,'test1234'),(2,2,'hyjei10'),(3,2,'dustnzlzl'),(4,3,'dustnzlzl'),(5,3,'hyjei10'),(6,2,'jeongjin'),(7,2,'gusxosmsdy'),(8,2,'tenbeom'),(9,4,'jeongjin'),(10,5,'jeongjin'),(11,5,'hyjei10'),(12,6,'holy_killer@naver.com'),(13,7,'holy_killer@naver.com'),(14,8,'dustnzlzl'),(15,9,'jeong7'),(16,8,'rladustn'),(17,10,'gusxosmsdy'),(18,11,'gusxosmsdy2'),(19,12,'gusxosmsdy2'),(20,13,'hyjei100'),(21,14,'hyjei10'),(22,15,'hyjei1000'),(23,16,'hyjei10'),(24,17,'gusxosmsdy@naver.com'),(25,15,'hyjei10'),(26,2,'jeong7'),(27,18,'gusxosmsdy'),(28,19,'dustnzlzl'),(29,20,'dustntn'),(30,21,'jeong7'),(31,22,'dustntn'),(32,23,'doohui96@naver.com');
/*!40000 ALTER TABLE `user_depart` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-19  9:35:44
