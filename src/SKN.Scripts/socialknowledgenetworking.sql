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

insert into user(username, password, full_name, email, yearofbirth, created_at) values ('David', '123456', 'David', 'David@gmail.com', 2000, '2021-07-22');
insert into user(username, password, full_name, email, yearofbirth, created_at) values ('Moutain', '123456', 'David', 'David@gmail.com', 1999, '2021-07-22');

insert into question(title, content, status, username, created_at) values ('Đây là tiêu đề câu hỏi số 4', 'Đây là nội dung câu hỏi số 4', 1, 'David', '2021-05-12');
insert into question(title, content, status, username, created_at) values ('Đây là tiêu đề câu hỏi số 5', 'Đây là nội dung câu hỏi số 5', 1, 'David', '2021-05-11');
insert into question(title, content, status, username, created_at) values ('Đây là tiêu đề câu hỏi số 6', 'Đây là nội dung câu hỏi số 6', 1, 'David', '2021-05-12');
insert into question(title, content, status, username, created_at) values ('Đây là tiêu đề câu hỏi số 7', 'Đây là nội dung câu hỏi số 7', 1, 'Moutain', '2021-05-12');
insert into question(title, content, status, username, created_at) values ('Đây là tiêu đề câu hỏi số 8', 'Đây là nội dung câu hỏi số 8', 1, 'Moutain', '2021-04-12');
insert into question(title, content, status, username, created_at) values ('Đây là tiêu đề câu hỏi số 9', 'Đây là nội dung câu hỏi số 9', 1, 'Moutain', '2021-04-12');
insert into question(title, content, status, username, created_at) values ('Đây là tiêu đề câu hỏi số 10', 'Đây là nội dung câu hỏi số 10', 1, 'Moutain', '2021-04-10');
insert into question(title, content, status, username, created_at) values ('Đây là tiêu đề câu hỏi số 11', 'Đây là nội dung câu hỏi số 11', 0, 'Moutain', '2021-04-12');

insert into answer(full_content, status, image_link, question_id, username, created_at) values ('Nội dung câu trả lời 1', 1, null, 4, 'Moutain', '2021-05-13');
insert into answer(full_content, status, image_link, question_id, username, created_at) values ('Nội dung câu trả lời 2', 1, null, 5, 'Moutain', '2021-05-14');
insert into answer(full_content, status, image_link, question_id, username, created_at) values ('Nội dung câu trả lời 3', 1, null, 6, 'Moutain', '2021-05-15');
insert into answer(full_content, status, image_link, question_id, username, created_at) values ('Nội dung câu trả lời 4', 1, null, 7, 'David', '2021-05-20');
insert into answer(full_content, status, image_link, question_id, username, created_at) values ('Nội dung câu trả lời 5', 1, null, 8, 'David', '2021-05-21');
insert into answer(full_content, status, image_link, question_id, username, created_at) values ('Nội dung câu trả lời 6', 0, null, 5, 'David', '2021-05-22');

insert into reactquestion(username, question_id, is_like) values	('David', 4, 1),('Moutain', 5, 1), ('David', 6, 1), ('Moutain', 7, 1), ('David', 8, 1), ('Moutain', 9, 1);

insert into category(category_name) values ('Thể thao'), ('Thời tiết'), ('Xã hội'), ('Thời trang'), ('Chính trị');

insert into categoryquestion(category_id, question_id) values (1, 4), (1, 5), (2, 6), (2, 7), (3, 8), (4, 9), (5, 10);

