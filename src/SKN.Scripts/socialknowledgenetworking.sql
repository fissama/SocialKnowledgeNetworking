CREATE DATABASE `SocialKnowledgeNetworking` CHARACTER SET utf8 COLLATE utf8_general_ci;
use  SocialKnowledgeNetworking;

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
ALTER TABLE Question AUTO_INCREMENT = 4;
CREATE TABLE `ReactQuestion` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(255),
  `question_id` int,
  `is_like` boolean
);
CREATE TABLE `Tag` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `tag_name` nvarchar(255),
  `question_id` int
);
CREATE TABLE `Answer` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
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
  
insert into category(category_name) values ('T???t c???'), ('Th??? thao'), ('Th???i ti???t'), ('X?? h???i'), ('Th???i trang'), ('Ch??nh tr???');
  insert into user(username, password, full_name, email, yearofbirth, created_at) values ('David', 'David@gmail.com', null, 'David@gmail.com', 2000, null);
  insert into user(username, password, full_name, email, yearofbirth, created_at) values ('Lorks', 'David2@gmail.com', null, 'David2@gmail.com', 2000, null);
  insert into question(title, content, status, username, created_at) values ('????y l?? ti??u ????? c??u h???i s??? 4', '????y l?? n???i dung c??u h???i s??? 4', 1, 'David@gmail.com', '2021-05-12');
  insert into question(title, content, status, username, created_at) values ('????y l?? ti??u ????? c??u h???i s??? 5', '????y l?? n???i dung c??u h???i s??? 5', 1, 'David2@gmail.com', '2021-05-12');
  insert into question(title, content, status, username, created_at) values ('????y l?? ti??u ????? c??u h???i s??? 6', '????y l?? n???i dung c??u h???i s??? 6', 1, 'David2@gmail.com', '2021-05-12');
  insert into question(title, content, status, username, created_at) values ('????y l?? ti??u ????? c??u h???i s??? 7', '????y l?? n???i dung c??u h???i s??? 7', 1, 'David@gmail.com', '2021-05-12');
  insert into question(title, content, status, username, created_at) values ('????y l?? ti??u ????? c??u h???i s??? 9', '????y l?? n???i dung c??u h???i s??? 9', 1, 'David2@gmail.com', '2021-04-12');
  
  insert into socialknowledgenetworking.setting(setting_name,setting_value) values ('auto_audit',0)
  
  
  insert into answer(full_content, status, image_link, question_id, username, created_at) values ('N???i dung c??u tr??? l???i 1',1 , null, 1, 'David2@gmail.com', '2021-05-13');
  insert into answer(full_content, status, image_link, question_id, username, created_at) values ('N???i dung c??u tr??? l???i 2',1 , null, 2, 'David1@gmail.com', '2021-05-14');
  insert into answer(full_content, status, image_link, question_id, username, created_at) values ('N???i dung c??u tr??? l???i 3',1 , null, 3, 'David1@gmail.com', '2021-05-15');
  insert into answer(full_content, status, image_link, question_id, username, created_at) values ('N???i dung c??u tr??? l???i 4',2 , null, 4, 'David2@gmail.com', '2021-05-20');
  insert into answer(full_content, status, image_link, question_id, username, created_at) values ('N???i dung c??u tr??? l???i 5',1 , null, 5, 'David1@gmail.com', '2021-05-21');
  insert into answer(full_content, status, image_link, question_id, username, created_at) values ('N???i dung c??u tr??? l???i 6',1 , null, 2, 'David1@gmail.com', '2021-05-22');
  

  insert into reactquestion(username, question_id, star, is_like) values
  ('David2@gmail.com', 1, 0, 1),('David2@gmail.com', 2, 0, 1), ('David2@gmail.com', 3, 0, 1), ('David2@gmail.com', 4, 0, 1), ('David2@gmail.com', 5, 0, 1), ('David@gmail.com', 5, 0, 1);
  

  
  insert into categoryquestion(category_id, question_id) values (1, 1), (1, 2), (2, 3), (1, 4), (3, 5);
 
