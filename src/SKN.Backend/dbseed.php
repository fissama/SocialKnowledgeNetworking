<?php
require 'bootstrap.php';

$statement = <<<EOS
create table IF NOT EXISTS `setting`(
    `setting_name` NVARCHAR(100) NOT NULL,
    `setting_value` NVARCHAR(100) NOT NULL
  );
  CREATE TABLE IF NOT EXISTS `User` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `username` varchar(255),
    `password` varchar(255),
    `full_name` nvarchar(255),
    `email` varchar(255),
    `yearofbirth` int,
    `created_at` timestamp
  );
  CREATE TABLE IF NOT EXISTS `Badge` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `point` int,
    `date` date,
    `user_id` int
  );
  CREATE TABLE IF NOT EXISTS `Question` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `title` nvarchar(255),
    `content` nvarchar(1000),
    `status` int,
    `user_id` int,
    `created_at` timestamp
  );
  CREATE TABLE IF NOT EXISTS `ReactQuestion` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `username` varchar(255),
    `question_id` int,
    `star` int COMMENT 'between 0 and 5',
    `is_like` boolean,
    `is_dislike` boolean
  );
  CREATE TABLE IF NOT EXISTS `Tag` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `tag_name` nvarchar(255),
    `question_id` int
  );
  CREATE TABLE IF NOT EXISTS `Answer` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `shorten_content` nvarchar(255),
    `full_content` nvarchar(1000),
    `status` int,
    `image_link` varchar(255),
    `question_id` int,
    `user_id` int,
    `created_at` timestamp
  );
  CREATE TABLE IF NOT EXISTS `Category` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `category_name` nvarchar(255)
  );
  CREATE TABLE IF NOT EXISTS `CategoryQuestion` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `category_id` int,
    `question_id` int
  );
  ALTER TABLE
    `Badge`
  ADD
    FOREIGN KEY (`user_id`) REFERENCES `User` (`id`);
  ALTER TABLE
    `Question`
  ADD
    FOREIGN KEY (`user_id`) REFERENCES `User` (`id`);
    ALTER TABLE
    `Answer`
  ADD
    FOREIGN KEY (`user_id`) REFERENCES `User` (`id`);
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
    
  insert into `Category`(`category_name`) value('History');
  insert into `Category`(`category_name`) value('Social');
  insert into `Category`(`category_name`) value('Sport');
  insert into `Category`(`category_name`) value('Business');
  insert into `Category`(`category_name`) value('Politics');
  insert into `Category`(`category_name`) value('Economy');
  insert into `Category`(`category_name`) value('Environment');
  insert into `Category`(`category_name`) value('Life&Style');
  insert into `Category`(`category_name`) value('Laws');
EOS;

try {
    $createTable = $dbConnection->exec($statement);
    echo "Success!\n";
} catch (\PDOException $e) {
    exit($e->getMessage());
}