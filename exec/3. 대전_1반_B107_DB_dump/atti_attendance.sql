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
-- Table structure for table `attendance`
--

DROP TABLE IF EXISTS `attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attendance` (
  `attendance_id` bigint NOT NULL AUTO_INCREMENT,
  `attendance_content` longtext,
  `course_id` bigint DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`attendance_id`),
  KEY `FKmwxjtpjcf6y7m8x2jqeryj255` (`course_id`),
  KEY `FK46cuxphi3uh5quom51s6i2q8x` (`user_id`),
  CONSTRAINT `FK46cuxphi3uh5quom51s6i2q8x` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKmwxjtpjcf6y7m8x2jqeryj255` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendance`
--

LOCK TABLES `attendance` WRITE;
/*!40000 ALTER TABLE `attendance` DISABLE KEYS */;
INSERT INTO `attendance` VALUES (1,'결석',1,'test1234'),(2,'지각',2,'test1234'),(5,'결석',4,'hyjei10'),(6,'결석',4,'dustnzlzl'),(7,'결석',5,'hyjei10'),(8,'결석',5,'dustnzlzl'),(11,'결석',7,'hyjei10'),(12,'결석',7,'dustnzlzl'),(13,'결석',8,'hyjei10'),(14,'결석',8,'dustnzlzl'),(15,'결석',9,'hyjei10'),(16,'결석',9,'dustnzlzl'),(17,'지각',10,'hyjei10'),(18,'출석',10,'dustnzlzl'),(19,'출석',10,'jeongjin'),(20,'출석',10,'gusxosmsdy'),(21,'출석',10,'tenbeom'),(27,'출석',12,'hyjei10'),(28,'결석',12,'dustnzlzl'),(29,'결석',12,'jeongjin'),(30,'결석',12,'gusxosmsdy'),(31,'결석',12,'tenbeom'),(32,'지각',13,'hyjei10'),(33,'결석',13,'dustnzlzl'),(34,'지각',13,'jeongjin'),(35,'지각',13,'gusxosmsdy'),(36,'지각',13,'tenbeom'),(37,'결석',14,'hyjei10'),(38,'결석',14,'dustnzlzl'),(39,'결석',14,'jeongjin'),(40,'결석',14,'gusxosmsdy'),(41,'결석',14,'tenbeom'),(42,'결석',15,'hyjei10'),(43,'결석',15,'dustnzlzl'),(44,'결석',15,'jeongjin'),(45,'결석',15,'gusxosmsdy'),(46,'결석',15,'tenbeom'),(47,'결석',16,'jeong7'),(48,'결석',17,'jeong7'),(49,'결석',18,'hyjei100');
/*!40000 ALTER TABLE `attendance` ENABLE KEYS */;
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
