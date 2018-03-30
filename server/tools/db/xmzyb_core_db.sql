/*
 Navicat Premium Data Transfer

 Source Server         : core_db
 Source Server Type    : MySQL
 Source Server Version : 50628
 Source Host           : gz-cdb-hy2472r9.sql.tencentcdb.com:63055
 Source Schema         : xmzyb_core_db

 Target Server Type    : MySQL
 Target Server Version : 50628
 File Encoding         : 65001

 Date: 29/03/2018 18:37:48
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for note
-- ----------------------------
DROP TABLE IF EXISTS `note`;
CREATE TABLE `note` (
  `noteId` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `noteText` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `blocks` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `noteImageData` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`noteId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Table structure for tutor
-- ----------------------------
DROP TABLE IF EXISTS `tutor`;
CREATE TABLE `tutor` (
  `tutorId` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tutorInfo` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `lastVisitTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`tutorId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

SET FOREIGN_KEY_CHECKS = 1;
