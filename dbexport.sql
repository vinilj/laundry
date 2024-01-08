-- MySQL dump 10.13  Distrib 5.7.29, for Linux (x86_64)
--
-- Host: localhost    Database: laundry
-- ------------------------------------------------------
-- Server version	5.7.29-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Franchise`
--

DROP TABLE IF EXISTS `Franchise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Franchise` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(512) DEFAULT NULL,
  `email` varchar(512) DEFAULT NULL,
  `address` varchar(512) DEFAULT NULL,
  `mobile` varchar(512) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Franchise`
--

LOCK TABLES `Franchise` WRITE;
/*!40000 ALTER TABLE `Franchise` DISABLE KEYS */;
INSERT INTO `Franchise` VALUES (1,'Coin Laundry','coin@coinlaundry.com','marathahalli','1234567898',5),(2,'XYZ College','xyz@college.org','XYZ College','1234567899',10),(3,'abc collee','abc@abc.com','abc coleke','12345698',0),(4,'BTM ','btm@btm.com','#BTM','123456763',0),(5,'Silkboard','silkboard@sol.com','#silkboard','12322121122',0);
/*!40000 ALTER TABLE `Franchise` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `InstaCoupons`
--

DROP TABLE IF EXISTS `InstaCoupons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `InstaCoupons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `coupon` varchar(512) NOT NULL,
  `coins` int(11) NOT NULL,
  `fromDate` datetime NOT NULL,
  `toDate` datetime NOT NULL,
  `franchiseId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `coupon` (`coupon`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `InstaCoupons`
--

LOCK TABLES `InstaCoupons` WRITE;
/*!40000 ALTER TABLE `InstaCoupons` DISABLE KEYS */;
INSERT INTO `InstaCoupons` VALUES (1,'NEW YEAR',10,'2020-04-28 18:30:00','2020-05-30 18:30:00',1),(2,'LOCKDOWN',50,'2020-04-30 18:30:00','2020-04-14 18:30:00',1),(3,'NEWWZ20',20,'2020-04-28 18:30:00','2020-04-28 18:30:00',2);
/*!40000 ALTER TABLE `InstaCoupons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Machine`
--

DROP TABLE IF EXISTS `Machine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Machine` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `operationType` varchar(512) NOT NULL,
  `charges` int(11) NOT NULL,
  `franchiseId` int(11) DEFAULT NULL,
  `btAddress` varchar(512) DEFAULT NULL,
  `status` varchar(512) DEFAULT NULL,
  `machineType` varchar(512) DEFAULT NULL,
  `modelNumber` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Machine`
--

LOCK TABLES `Machine` WRITE;
/*!40000 ALTER TABLE `Machine` DISABLE KEYS */;
INSERT INTO `Machine` VALUES (1,'self operated',5,1,'3C:71:BF:F9:3D:DE','active',NULL,NULL),(2,'drop off',5,1,NULL,'active',NULL,NULL),(3,'self operated',1,1,'24:0A:C4:9A:65:C6','active','Washer',NULL),(4,'self operated',1,1,'1','inactive','','1'),(5,'drop off',2,2,'AB:CD:PEF:','inactive','','Abcd54'),(6,'self operated',1123,1,'11','active','','34567'),(7,'self operated',234,2,'234','active','washer','222'),(8,'drop off',2222,1,'d32eqw','active','washer','wwdw'),(9,'self operated',500,1,'20:E9:2P:3L','active','washer','ABC2020'),(10,'self operated',9999,2,'1111111111111111','active','washer','Dexter'),(11,'self operated',55,2,'343e','active','washer','Dexter'),(12,'self operated',22222,1,'22222','active','washer','2222222'),(13,'self operated',1,2,'1','active','washer','1'),(14,'self operated',5,2,'5','active','washer','5'),(15,'self operated',1,2,'1','active','washer','1'),(16,'drop off',0,2,'1','active','washer','1'),(17,'self operated',3232,2,'32323','active','washer','DEEEEE');
/*!40000 ALTER TABLE `Machine` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Offers`
--

DROP TABLE IF EXISTS `Offers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Offers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `offerName` varchar(512) NOT NULL,
  `coupon` varchar(512) NOT NULL,
  `createDate` datetime NOT NULL,
  `expireDate` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Offers`
--

LOCK TABLES `Offers` WRITE;
/*!40000 ALTER TABLE `Offers` DISABLE KEYS */;
/*!40000 ALTER TABLE `Offers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Order`
--

DROP TABLE IF EXISTS `Order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `startTime` datetime NOT NULL,
  `endTime` datetime DEFAULT NULL,
  `weight` int(11) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `paymentStatus` varchar(512) NOT NULL,
  `orderStatus` varchar(512) DEFAULT NULL,
  `feedback` varchar(512) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `franchiseId` int(11) DEFAULT NULL,
  `opertationType` varchar(512) DEFAULT NULL,
  `machineId` int(11) DEFAULT NULL,
  `rewardAmount` int(11) DEFAULT NULL,
  `walletDeductions` int(11) DEFAULT NULL,
  `promoDeductions` int(11) DEFAULT NULL,
  `promoCode` varchar(512) DEFAULT NULL,
  `transactionId` varchar(512) DEFAULT NULL,
  `transactionType` varchar(512) DEFAULT NULL,
  `transactionAmount` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Order`
--

LOCK TABLES `Order` WRITE;
/*!40000 ALTER TABLE `Order` DISABLE KEYS */;
INSERT INTO `Order` VALUES (1,'2020-04-06 12:20:30','2020-04-06 12:20:30',0,0,'due','delivered','',1,2,'drop off',2,NULL,NULL,0,NULL,NULL,NULL,NULL),(2,'2020-04-06 12:49:20','2020-04-06 12:49:20',10,100,'due','delivered','',2,2,'drop off',2,NULL,NULL,0,NULL,NULL,NULL,NULL),(3,'2020-04-06 12:49:23','2020-04-06 12:49:23',6,220,'due','inpogress','',2,2,'drop off',2,NULL,NULL,0,NULL,NULL,NULL,NULL),(4,'2020-04-06 12:49:29','2020-04-06 12:49:29',5,50,'due','inpogress','',2,2,'drop off',2,NULL,NULL,0,NULL,NULL,NULL,NULL),(5,'2020-04-06 12:49:40','2020-04-06 12:49:40',20,200,'due','wash intiated','',2,2,'drop off',2,NULL,NULL,0,NULL,NULL,NULL,NULL),(6,'2020-04-06 12:49:46','2020-04-06 12:49:46',0,0,'due','delivered','',2,2,'drop off',2,NULL,NULL,0,NULL,NULL,NULL,NULL),(20,'2020-04-07 05:22:41','2020-04-07 05:22:41',0,1,'paid','completed','4',1,1,'self operated',3,0,0,0,'',NULL,NULL,NULL),(21,'2020-04-07 07:41:07','2020-04-07 07:41:07',0,1,'paid','completed','4',1,1,'self operated',3,0,0,0,'',NULL,NULL,NULL),(23,'2020-04-08 14:06:59','2020-04-08 14:36:59',0,1,'paid','completed','5',2,1,'self operated',3,0,1,0,'',NULL,NULL,NULL),(24,'2020-04-08 14:07:37','2020-04-08 14:37:37',0,1,'paid','completed','5',2,1,'self operated',3,0,1,0,'',NULL,NULL,NULL),(25,'2020-04-08 14:07:58','2020-04-08 14:37:58',0,1,'paid','completed','5',2,1,'self operated',3,0,1,0,'',NULL,NULL,NULL),(26,'2020-04-10 06:13:25','2020-04-10 06:43:25',0,1,'paid','completed','3',6,1,'self operated',3,0,0,0,'',NULL,NULL,NULL),(27,'2020-04-10 06:15:08','2020-04-10 06:45:08',0,1,'paid','completed','1',6,1,'self operated',3,0,0,1,'New100',NULL,NULL,NULL),(28,'2020-04-10 08:14:23','2020-04-10 08:14:23',0,0,'due','','',6,1,'drop off',2,NULL,0,0,NULL,NULL,NULL,NULL),(29,'2020-04-10 08:22:45','2020-04-10 08:52:45',0,1,'paid','completed','4',6,1,'self operated',3,0,0,1,'New100',NULL,NULL,NULL),(30,'2020-04-12 15:48:10','2020-04-12 16:18:10',0,1,'paid','Completed','',6,1,'self operated',3,0,0,0,'',NULL,NULL,NULL),(31,'2020-04-13 05:57:08','2020-04-13 05:57:08',0,0,'due','','',10,1,'drop off',2,NULL,0,0,NULL,NULL,NULL,NULL),(32,'2020-04-13 06:38:37','2020-04-13 07:08:37',0,1,'paid','Completed','',2,1,'self operated',3,0,1,0,'',NULL,NULL,NULL),(33,'2020-04-14 04:52:14','2020-04-14 05:22:14',0,1,'paid','Completed','',35,1,'self operated',3,0,0,0,'',NULL,NULL,NULL),(34,'2020-04-14 04:52:14','2020-04-14 04:52:14',0,0,'due','','',10,1,'drop off',2,NULL,0,0,NULL,NULL,NULL,NULL),(35,'2020-04-14 04:58:32','2020-04-14 05:28:32',0,1,'paid','Completed','',35,1,'self operated',3,0,0,0,'',NULL,NULL,NULL),(36,'2020-04-14 05:22:17','2020-04-14 05:52:17',0,1,'paid','Completed','',10,1,'self operated',3,0,0,1,'New100',NULL,NULL,NULL),(37,'2020-04-14 05:27:15','2020-04-14 05:27:15',2,2,'due','delivered','',10,1,'drop off',2,NULL,0,0,NULL,NULL,NULL,NULL),(38,'2020-04-20 11:30:43','2020-04-20 11:30:43',6,200,'due','delivered','',35,1,'drop off',2,NULL,0,0,NULL,NULL,NULL,NULL),(39,'2020-04-20 11:31:01','2020-04-20 11:31:01',0,0,'due','','',35,1,'drop off',2,NULL,0,0,NULL,NULL,NULL,NULL),(40,'2020-04-20 11:31:14','2020-04-20 11:31:14',0,0,'due','','',35,1,'drop off',2,NULL,0,0,NULL,NULL,NULL,NULL),(41,'2020-04-21 06:48:00','2020-04-21 07:18:00',0,5,'paid','Completed','',37,1,'self operated',1,0,5,0,'',NULL,NULL,NULL),(42,'2020-04-21 07:00:15','2020-04-21 07:00:15',6,250,'due','delivered','',37,1,'drop off',2,NULL,0,0,NULL,NULL,NULL,NULL),(43,'2020-04-21 07:01:24','2020-04-21 07:31:24',0,1,'paid','Completed','',37,1,'self operated',3,0,1,0,'',NULL,NULL,NULL),(44,'2020-04-21 07:04:39','2020-04-21 07:34:39',0,5,'paid','Completed','',37,1,'self operated',1,0,5,0,'',NULL,NULL,NULL),(45,'2020-04-21 07:11:39','2020-04-21 07:41:39',0,5,'paid','Completed','',37,1,'self operated',1,0,5,0,'',NULL,NULL,NULL),(46,'2020-04-21 07:14:15','2020-04-21 07:14:15',12,5,'due','inpogress','',37,1,'drop off',2,NULL,0,0,NULL,NULL,NULL,NULL),(47,'2020-04-21 07:15:28','2020-04-21 07:45:28',0,1,'paid','Completed','',37,1,'self operated',3,0,1,0,'',NULL,NULL,NULL),(48,'2020-04-21 07:49:10','2020-04-21 08:19:10',0,5,'paid','Completed','',37,1,'self operated',1,0,5,0,'',NULL,NULL,NULL),(49,'2020-04-21 09:32:51','2020-04-21 10:02:51',0,5,'paid','Completed','',37,1,'self operated',1,0,5,0,'',NULL,NULL,NULL),(50,'2020-04-26 07:47:03','2020-04-26 08:17:03',0,5,'paid','Completed','',37,1,'self operated',1,0,5,0,'',NULL,NULL,NULL),(51,'2020-04-26 08:05:22','2020-04-26 08:05:22',1,2,'due','wash intiated','',37,1,'drop off',2,NULL,0,0,NULL,NULL,NULL,NULL),(52,'2020-04-27 15:50:31','2020-04-27 16:20:31',0,5,'paid','Completed','',37,1,'self operated',1,0,5,0,'',NULL,NULL,NULL),(53,'2020-04-27 15:51:17','2020-04-27 16:21:17',0,5,'paid','Completed','',37,1,'self operated',1,0,5,0,'',NULL,NULL,NULL),(54,'2020-04-27 15:51:39','2020-04-27 16:21:39',0,1,'paid','Completed','',37,1,'self operated',3,0,1,0,'',NULL,NULL,NULL),(55,'2020-04-27 15:52:37','2020-04-27 16:22:37',0,5,'paid','Completed','',37,1,'self operated',1,0,5,0,'',NULL,NULL,NULL),(56,'2020-04-27 15:54:12','2020-04-27 15:54:12',2,2,'due','inpogress','',37,1,'drop off',2,NULL,0,0,NULL,NULL,NULL,NULL),(57,'2020-04-27 16:32:59','2020-04-27 16:32:59',2,2,'due','','',48,1,'drop off',2,NULL,0,0,NULL,NULL,NULL,NULL),(58,'2020-04-27 16:34:28','2020-04-27 16:34:28',2,2,'due','delivered','',48,1,'drop off',2,NULL,0,0,NULL,NULL,NULL,NULL),(59,'2020-04-27 16:36:32','2020-04-27 17:06:32',0,1,'paid','Completed','',48,1,'self operated',3,0,0,0,'',NULL,NULL,NULL),(60,'2020-04-27 16:46:43','2020-04-27 17:16:43',0,5,'paid','Completed','',48,1,'self operated',1,0,0,0,'',NULL,NULL,NULL),(61,'2020-04-29 05:36:36','2020-04-29 05:36:36',0,0,'due','delivered','',37,1,'drop off',2,NULL,0,0,NULL,NULL,NULL,NULL),(62,'2020-04-29 06:35:42','2020-04-29 07:05:42',0,5,'paid','Completed','',35,1,'self operated',1,0,0,0,'',NULL,NULL,NULL),(63,'2020-04-29 06:37:59','2020-04-29 07:07:59',0,5,'paid','Completed','',35,1,'self operated',1,0,0,0,'',NULL,NULL,NULL),(64,'2020-04-29 07:07:59','2020-04-29 07:37:59',0,5,'paid','Completed','',35,1,'self operated',1,0,0,0,'',NULL,NULL,NULL),(65,'2020-04-29 07:14:15','2020-04-29 07:44:15',0,5,'paid','Completed','',35,1,'self operated',1,0,0,0,'',NULL,NULL,NULL),(66,'2020-04-29 07:32:02','2020-04-29 08:02:02',0,5,'paid','Completed','',35,1,'self operated',1,0,0,0,'',NULL,NULL,NULL),(67,'2020-04-30 05:17:44','2020-04-30 05:17:44',0,5,'due','','',35,1,'drop off',2,NULL,0,0,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `Order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Otp`
--

DROP TABLE IF EXISTS `Otp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Otp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mobile` varchar(512) NOT NULL,
  `otp` int(11) NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Otp`
--

LOCK TABLES `Otp` WRITE;
/*!40000 ALTER TABLE `Otp` DISABLE KEYS */;
INSERT INTO `Otp` VALUES (15,'9948220016',3887,'2020-04-25 05:34:52'),(27,'9972892543',3589,'2020-04-27 16:57:35');
/*!40000 ALTER TABLE `Otp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `RechargeWallet`
--

DROP TABLE IF EXISTS `RechargeWallet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `RechargeWallet` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `couponCode` varchar(512) NOT NULL,
  `coins` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `mobile` varchar(512) DEFAULT NULL,
  `usedDate` datetime DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `couponCode` (`couponCode`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RechargeWallet`
--

LOCK TABLES `RechargeWallet` WRITE;
/*!40000 ALTER TABLE `RechargeWallet` DISABLE KEYS */;
INSERT INTO `RechargeWallet` VALUES (1,'SXSRT42656K8',1,6,'9916123328','2020-04-10 06:27:58',1),(2,'473NFHRDELZY',1,NULL,NULL,NULL,0),(3,'KVMQW6M12ZTA',1,NULL,NULL,NULL,0),(4,'X3HJM01U9OOT',1,NULL,NULL,NULL,0),(5,'XZELFD0F6S3R',1,NULL,NULL,NULL,0),(6,'TTR45Z88SRQW',1,NULL,NULL,NULL,0),(7,'R61ZV3V1MC0E',1,NULL,NULL,NULL,0),(8,'02GVTIDX2RAS',1,NULL,NULL,NULL,0),(9,'WD22LYAC0F66',1,NULL,NULL,NULL,0),(10,'3JFUQ5SMW947',1,NULL,NULL,NULL,0),(11,'KSLKEGAKJTTP',1,NULL,NULL,NULL,0),(12,'DNUONCL471M1',1,NULL,NULL,NULL,0),(13,'1UO6LV04CXKI',1,NULL,NULL,NULL,0),(14,'B38XS5Z3HEBN',1,NULL,NULL,NULL,0),(15,'7FHFSVGFNFXE',1,NULL,NULL,NULL,0),(16,'9LV7AXYPV7MM',1,NULL,NULL,NULL,0),(17,'8NL60537KE4D',1,NULL,NULL,NULL,0),(18,'SRZZMRSS473X',1,NULL,NULL,NULL,0),(19,'6PVKDLYFH5PV',1,NULL,NULL,NULL,0),(20,'VHAIH62QE7LC',1,NULL,NULL,NULL,0),(21,'LVCQVYK78IVV',1,NULL,NULL,NULL,0),(22,'VD4HXR29ZVW1',1,NULL,NULL,NULL,0),(23,'RZYMZX0O1LUL',1,10,'7397666176','2020-04-13 05:09:54',1),(24,'V56NJ280UKMN',1,35,'9743300260','2020-04-21 06:19:45',1),(25,'7UACT9TLEJBA',1,37,'9945220016','2020-04-21 06:20:12',1),(26,'Z4NBHB654O81',1,35,'9743300260','2020-04-21 06:20:53',1),(27,'QNCKIYOJ3VQC',1,37,'9945220016','2020-04-21 06:23:02',1),(28,'SICW51TBGXSH',1,NULL,NULL,NULL,0),(29,'2BIT4OI4QYEZ',1000,37,'9945220016','2020-04-21 06:42:39',1),(30,'VVHDMB0P2XD0',1,10,'7397666176','2020-04-14 05:32:39',1),(31,'abc',10,NULL,NULL,NULL,0),(32,'Iuiiu g',10,NULL,NULL,NULL,0),(33,'lksjls',0,NULL,NULL,NULL,0),(40,'NewYear',100,NULL,NULL,NULL,0);
/*!40000 ALTER TABLE `RechargeWallet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(512) NOT NULL,
  `lastName` varchar(512) DEFAULT NULL,
  `email` varchar(512) NOT NULL,
  `password` varchar(512) NOT NULL,
  `mobile` varchar(512) NOT NULL,
  `stayIn` varchar(512) DEFAULT NULL,
  `userType` varchar(512) DEFAULT NULL,
  `permissions` text,
  `dob` varchar(512) DEFAULT NULL,
  `franchiseId` int(11) DEFAULT NULL,
  `deviceToken` varchar(512) DEFAULT NULL,
  `userNotification` tinyint(1) DEFAULT NULL,
  `lastActivityDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (1,'store','operator','store@coinlaundry.com','password@123','6370347057','Home','storeoperator','[\"AccessAuthFeatures\"]','2020-04-06',2,NULL,NULL,'2020-04-18 04:11:23',1),(2,'Ravi','Venkatesulu','ravi.venkatesulu@gmail.com','$2a$10$6KyP2v0bOtxW0tBKgTjNsuJtDA1wReYzWrE7jVuM1EtiBlkmWDRxK','9886408380','home','user','[\"AccessAuthFeatures\"]','1979-11-18',NULL,NULL,NULL,'2020-04-18 04:11:23',0),(5,'aditya','wik','ja','$2a$10$YYRQOyHFnl51r/CCj/NGDOkQCk/M3JeVu.Z1pLqFL5RS.TjcxcKES','9618610909','home','user','[\"AccessAuthFeatures\"]','2020-04-08',NULL,NULL,NULL,'2020-04-18 04:11:23',0),(6,'Ganesh','Doddala','ganeshdoddala05@gmail.com','$2a$10$9Abo3XeQ9ZYOJ5FUvJW0SOYU9.QWSlrW/MUaywaFD9i3RNhiE6lQO','9916123328','Home','storeoperator','[\"AccessAuthFeatures\"]','2020-04-10',1,NULL,NULL,'2020-04-18 04:11:23',1),(9,'Mahesh','Kumar','mahe.kumar9@gmail.com','$2a$10$nW4G.EP.2wh4qEfLF3cvC.AtKiQ5pM3N/aLWBolCo1HG9WFj2bYci','9642073373','home','user','[\"AccessAuthFeatures\"]','',NULL,NULL,NULL,'2020-04-18 04:11:23',0),(10,'sonia','varsha','varshasonia13@gmail.com','$2a$10$Jj1pZckPBCOVkzxVUeNp7eQjU03O9O3/5aQyC1hIpuaEx0xqN6Wri','7397666176','home','user','[\"AccessAuthFeatures\"]','2020-04-01',1,NULL,NULL,'2020-04-18 04:11:23',0),(11,'Krishna','Samanth','samanth.krishna@gmail.com','$2a$10$9AEyNHv/37hPnLWxpJwTl.FOllVtSAr/5L.4gX5vsZQYnDkEqyn2q','9620678834','home','user','[\"AccessAuthFeatures\"]','2017-07-03',NULL,NULL,NULL,'2020-04-18 04:11:23',0),(34,'Ganesh_Admin','Admin','ganesh.d@makonissoft.com','$2a$10$EWeOOu4NxrF7oMGtZccfxuYfRryd/AtC0XXb3du6eYHeLDefyFYQa','9916129118','Home','superAdmin','[\"ALL\"]',NULL,NULL,NULL,NULL,'2020-04-18 04:11:23',1),(35,'Sai Krishna  Reddy ','Patil ','saikrishnajbs@gmail.com','$2a$10$vx8n3sE1U5/W0sHz8z964eoRWaUtBzNDqD/wP26z7eWFMRsWUQdY6','9743300260','home','user','[\"AccessAuthFeatures\"]','1990-09-17',1,NULL,NULL,'2020-04-30 10:47:45',1),(36,'smruti','Ranjan','smruti.r@makonissoft.com','$2a$10$InQIr6CfJvIn/ThCqA6cd.XYPvWKk9RVC.n9hK91kaMEiR9wCdade','12345678',NULL,'superAdmin','[\"ALL\"]',NULL,NULL,NULL,NULL,'2020-04-18 04:11:23',1),(37,'sathish','mahadev','coinlaundryindia@gmail.com','$2a$10$77yqP1.Hg04TNrKHmd8wj.Lv2U7vQJhN2Oxdb4jwJd7THFpcNc4lK','9945220016','home','user','[\"AccessAuthFeatures\"]','2011-05-25',NULL,NULL,NULL,'2020-04-29 11:06:37',0),(42,'smaruti','Franchise','smrutiranjan2920@abc.com','$2a$10$gCnG0t0ye8hA1sSrBVXxt.hniUuKIMqCEHeaMmlZN1MDVMc5FMeca','1234567876',NULL,'FranchiseAdmin','[\"FranchiseAdmin\"]',NULL,1,NULL,NULL,'2020-04-22 15:36:51',NULL),(43,'sem','abc','srm@qwr.com','$2a$10$EwotM8ZWhQ8kHq4XRLy.K.L5IDcS2ri.lg5AOAHFVNDXSvyY3YGLm','1234567890',NULL,'storeoperator','[\"storeoperator\"]',NULL,1,NULL,NULL,'2020-04-23 11:34:38',NULL),(44,'aSasAS','DSdd','sdsad@gab.com','$2a$10$1SHmYaCEAkeZCvzynDPnreL7Nc8yuyJuJL83Cn4e9RwdCDmK7Yf66','9692545414',NULL,'user','[\"storeoperator\"]',NULL,1,NULL,NULL,'2020-04-23 12:04:09',NULL),(45,'GaneshStore','stoire','ganesh@store.com','$2a$10$5cdDZBgJrc0STC/DtHuwv./hzx.ZUCEUF6TS5RvDwKB1WgpXpHqsK','112323343',NULL,'FranchiseAdmin','[\"FranchiseAdmin\"]',NULL,0,NULL,NULL,'2020-04-27 06:07:24',NULL),(46,'storeoperator','store','storeoperator@laundry.com','$2a$10$8gl6e6boPrNN9pu2IDiTp.WVycryJhuww/3oHPqGanHDiSPXv1yN.','12344222324',NULL,'storeoperator','[\"storeoperator\"]',NULL,0,NULL,NULL,'2020-04-27 06:10:55',NULL),(47,'ABCoperator','alj','abcoperAtor@gmail.com','$2a$10$eKdhOFnPL6jrSzWZls.5A.nsf2md.QsYconWvnW8JyLdfz1L6MmMG','1234567890',NULL,'storeoperator','[\"storeoperator\"]',NULL,1,NULL,NULL,'2020-04-27 11:12:59',NULL),(48,'suguna','sathish','sathishm.20@gmail.com','$2a$10$sBf7AqvfsRDpRxymQop/PeHmwIJdue0rYeGtAvVCgs42aTJmWSwe.','9886397702','home','storeoperator','[\"AccessAuthFeatures\"]','2020-04-27',1,NULL,NULL,'2020-04-27 22:16:43',0),(49,'Smruti','ranjan','smrutiranjan2920@gmail.com','$2a$10$r4HXRcKk3Jix5Dqx3Cz56.LBZyFVLAXXQxceh08YIxgqu8OoYgzji','6370347057',NULL,'storeoperator','[\"storeoperator\"]',NULL,1,NULL,NULL,'2020-04-28 09:15:15',NULL);
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Wallet`
--

DROP TABLE IF EXISTS `Wallet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Wallet` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `balance` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Wallet`
--

LOCK TABLES `Wallet` WRITE;
/*!40000 ALTER TABLE `Wallet` DISABLE KEYS */;
INSERT INTO `Wallet` VALUES (1,0,1),(2,47,2),(3,0,3),(4,0,4),(5,0,5),(6,1,6),(7,0,7),(8,0,8),(9,0,9),(10,2,10),(11,0,11),(12,2,35),(13,965,37),(14,0,38),(15,0,39),(16,0,40),(17,0,41),(18,0,42),(19,0,45),(20,0,48);
/*!40000 ALTER TABLE `Wallet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `WalletHistory`
--

DROP TABLE IF EXISTS `WalletHistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `WalletHistory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `outletName` varchar(512) NOT NULL,
  `createdDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `orderId` varchar(512) NOT NULL,
  `coins` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `transactionType` varchar(512) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `WalletHistory`
--

LOCK TABLES `WalletHistory` WRITE;
/*!40000 ALTER TABLE `WalletHistory` DISABLE KEYS */;
INSERT INTO `WalletHistory` VALUES (1,'Online Recharge','2020-04-06 13:19:55','',50,2,'credit'),(2,'Coin Laundry','2020-04-08 14:07:02','23',1,2,'Debit'),(3,'Coin Laundry','2020-04-08 14:07:40','24',1,2,'Debit'),(4,'Coin Laundry','2020-04-08 14:08:01','25',1,2,'Debit'),(5,'Online Recharge','2020-04-10 06:27:58','',1,6,'credit'),(6,'Online Recharge','2020-04-13 05:09:54','',1,10,'credit'),(7,'Coin Laundry','2020-04-13 06:38:42','32',1,2,'Debit'),(8,'Online Recharge','2020-04-14 05:32:39','',1,10,'credit'),(9,'Online Recharge','2020-04-21 06:19:45','',1,35,'credit'),(10,'Online Recharge','2020-04-21 06:20:12','',1,37,'credit'),(11,'Online Recharge','2020-04-21 06:20:53','',1,35,'credit'),(12,'Online Recharge','2020-04-21 06:23:02','',1,37,'credit'),(13,'Online Recharge','2020-04-21 06:42:39','',1000,37,'credit'),(14,'Coin Laundry','2020-04-21 06:48:00','41',5,37,'Debit'),(15,'Coin Laundry','2020-04-21 07:01:25','43',1,37,'Debit'),(16,'Coin Laundry','2020-04-21 07:04:39','44',5,37,'Debit'),(17,'Coin Laundry','2020-04-21 07:11:39','45',5,37,'Debit'),(18,'Coin Laundry','2020-04-21 07:15:28','47',1,37,'Debit'),(19,'Coin Laundry','2020-04-21 07:49:13','48',5,37,'Debit'),(20,'Coin Laundry','2020-04-21 09:32:52','49',5,37,'Debit'),(21,'Coin Laundry','2020-04-26 07:47:04','50',5,37,'Debit'),(22,'Coin Laundry','2020-04-27 15:50:31','52',5,37,'Debit'),(23,'Coin Laundry','2020-04-27 15:51:17','53',5,37,'Debit'),(24,'Coin Laundry','2020-04-27 15:51:39','54',1,37,'Debit'),(25,'Coin Laundry','2020-04-27 15:52:37','55',5,37,'Debit');
/*!40000 ALTER TABLE `WalletHistory` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-30  8:09:42
