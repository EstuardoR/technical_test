CREATE DATABASE Tecnica;
USE Tecnica;

CREATE TABLE `user`(
	`id` INT NOT NULL AUTO_INCREMENT,
	`username` VARCHAR(50) NOT NULL,
	`password` VARCHAR(255) NOT NULL,
	`email` VARCHAR(100) NOT NULL,
PRIMARY KEY(`id`)
);

ALTER TABLE `user` ADD COLUMN permissions JSON;

select * from `user`;

CREATE TABLE `module` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name_module` VARCHAR(255) NOT NULL,
 PRIMARY KEY(`id`)
);

CREATE TABLE `permission` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`module_id` INT NOT NULL,
    `can_create` BOOLEAN DEFAULT FALSE,
    `can_read` BOOLEAN DEFAULT FALSE,
    `can_update` BOOLEAN DEFAULT FALSE,
    `can_delete` BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (`id`),
    FOREIGN KEY(`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE,
    FOREIGN KEY(`module_id`) REFERENCES module(`id`) ON DELETE CASCADE
);

INSERT INTO `module` ( `name_module`)
VALUES ('see users');

INSERT INTO `permission` (`can_create`,`can_read`,`can_update`, `can_delete`)
VALUES (true, true, true, true);

INSERT INTO `user` (`username`, `password`,`email`)
VALUES ('admin', 'imAdmin123', 'admin@permissions.com.gt');

SELECT * FROM `user`


