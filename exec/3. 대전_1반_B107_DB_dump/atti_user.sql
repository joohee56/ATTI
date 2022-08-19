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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` varchar(255) NOT NULL,
  `birth` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `social` varchar(255) DEFAULT NULL,
  `uid` bigint DEFAULT NULL,
  `user_delete_info` bit(1) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `user_role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('doohui96@naver.com','0912','doohui96@naver.com',NULL,NULL,'doohui96@naver.com',NULL,_binary '\0','이주희',NULL),('dustntn','19951219','dustn4325@naver.com','$2a$10$st6xd1raE/h9i83fPU9WK.jbMjYkwAIpVyCiwj0PM/Uirjzm0cRgW','010-3936-0543','none',1111111,_binary '\0','김연지','STUDENT'),('dustnzlzl','19990519','dustnzlzl@naver.com','$2a$10$/iw5uiz30Pfw0DIr5K.6NuM5dCN6O6s1LfsRWR34VxbgfdWUBH1DK','010-3936-0543','none',1111111,_binary '\0','김연수','STUDENT'),('gusxosmsdy','19950323','gusxosmsdy@naver.com','$2a$10$8k0zx9g4Y5zNisiO5WCYnOOXWTwX2Jr4Cal7SCaV6HIpDuncGEL7W','010-8650-6323','none',1111111,_binary '\0','이현태','STUDENT'),('gusxosmsdy@naver.com','0323','gusxosmsdy@naver.com',NULL,NULL,'gusxosmsdy@naver.com',NULL,_binary '\0','이현태',NULL),('gusxosmsdy2','19980315','gusxosmsdy@naver.com','$2a$10$uczanUu7pPz94QDfOpuxPulwtVfXXYc/8HOHxzMfC6Op7pvFiWgoS','010-8650-6323','none',1111111,_binary '\0','이현태','STUDENT'),('holy_killer@naver.com','0525','holy_killer@naver.com',NULL,NULL,'holy_killer@naver.com',NULL,_binary '\0','장진세',NULL),('hyjei10','20021010','hyjei10@gmail.com','$2a$10$fLms8H5pgm1tOojutGtDnOfqy9au7sstR3/j0K2iEYasZHDhPKP2W','010-2555-5148','none',1111111,_binary '\0','이현정','STUDENT'),('hyjei100','20000101','hyjei10@gmail.com','$2a$10$2/iwFjG7GNbyUng.uU5NIOvb4TLY9VDC34kApu/VikReE0ExlMVjy','010-2121-1212','none',1111111,_binary '\0','김철수','STUDENT'),('hyjei1000','20080101','hyjei10@gmail.com','$2a$10$o6.wLesLJEvBOLMW4pV7L.T64zyCjQP7PvJBL.Vy7NaRaIjRLLVem','010-2222-9999','none',1111111,_binary '\0','김영희','STUDENT'),('jeong7','19970717','jeong7@naver.com','$2a$10$hgRTZ7iO.6VZCWJl4grZrOa0laxKGhMIlJPP7f9blxaWbB4/uom.C','010-2245-1132','none',1111111,_binary '\0','정진','STUDENT'),('jeongjin','19920416','jeongjin@naver.com','$2a$10$L2NjMtp9uMeiwLyFcHsqh.WOu6NVWRjf755AYUZ7CbAJt/IDhnlvG','','none',1111111,_binary '\0','달밤의피에미친정진','STUDENT'),('rladustn','19990519','dustnzlzl@naver.com','$2a$10$OHXHrUdT80mln84H6LgOTe8dC3hIP2cbimTez6uAOeDOgZOO4iEe6','010-3936-0543','none',1111111,_binary '\0','김연수','STUDENT'),('tenbeom','19951213','pbsu1213@hanmail.net','$2a$10$J.dZjRpk869oU7R0grBwiOuJvjAYeoNKNPodI6pSdk9HxX5QeqVxC','010-8510-4523','none',1111111,_binary '\0','박박범범수수','STUDENT'),('test1234','19980617','test@test.com','$2a$10$xB5SImicqo/dgkHUxhzaiuM6FHjYtUamj3Dp2kP25tlS9N4P0TEPi','','none',1111111,_binary '\0','테스트계정','STUDENT');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-19  9:35:41
