CREATE DATABASE `SocialKnowledgeNetworking` CHARACTER SET utf8 COLLATE utf8_general_ci;


use `SocialKnowledgeNetworking`;

create table `setting`(
  `setting_name` NVARCHAR(100) NOT NULL,
  `setting_value` NVARCHAR(100) NOT NULL
);
CREATE TABLE `User` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(255),
  `password` varchar(255),
  `full_name` nvarchar(255),
  `email` varchar(255),
  `yearofbirth` int,
  `role` int,
  `created_at` timestamp
);
CREATE TABLE `Badge` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `point` int,
  `date` date,
  `username` varchar(255)
);
CREATE TABLE `Question` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` nvarchar(255),
  `content` nvarchar(1000),
  `status` int,
  `username` varchar(255),
  `created_at` timestamp
);
CREATE TABLE `ReactQuestion` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(255),
  `question_id` int,
  `star` int COMMENT 'between 0 and 5',
  `is_like` boolean,
  `is_dislike` boolean
);
CREATE TABLE `Tag` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `tag_name` nvarchar(255),
  `question_id` int
);
CREATE TABLE `Answer` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `shorten_content` nvarchar(255),
  `full_content` nvarchar(1000),
  `status` int,
  `image_link` varchar(255),
  `question_id` int,
  `username` varchar(255),
  `created_at` timestamp
);
CREATE TABLE `Category` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `category_name` nvarchar(255)
);
CREATE TABLE `CategoryQuestion` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `category_id` int,
  `question_id` int
);
ALTER TABLE `user` ADD UNIQUE(username);
ALTER TABLE
  `ReactQuestion`
ADD
  FOREIGN KEY (`question_id`) REFERENCES `Question` (`id`);
ALTER TABLE
  `Tag`
ADD
  FOREIGN KEY (`question_id`) REFERENCES `Question` (`id`);
ALTER TABLE
  `Answer`
ADD
  FOREIGN KEY (`question_id`) REFERENCES `Question` (`id`);
ALTER TABLE
  `CategoryQuestion`
ADD
  FOREIGN KEY (`category_id`) REFERENCES `Category` (`id`);
ALTER TABLE
  `CategoryQuestion`
ADD
  FOREIGN KEY (`question_id`) REFERENCES `Question` (`id`);