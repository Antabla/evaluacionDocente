--
-- Database: `evaluaciondocente_db`
--

CREATE DATABASE IF NOT EXISTS `evaluaciondocente_db`;
USE `evaluaciondocente_db`;


-- ENTITIES

--
-- Struttura della tabella `estudiante`
--

CREATE TABLE IF NOT EXISTS `estudiante` (
	`apellidos` varchar(130)  NOT NULL,
	`email` varchar(130) ,
	`nombres` varchar(130)  NOT NULL,
	
	-- RELAZIONI

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `login`
--

CREATE TABLE IF NOT EXISTS `login` (
	`password` varchar(130)  NOT NULL,
	`role` varchar(130)  NOT NULL,
	`username` varchar(130)  NOT NULL,
	
	-- RELAZIONI
	`id_estudiante` int(11)  REFERENCES estudiante(_id),

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `materia`
--

CREATE TABLE IF NOT EXISTS `materia` (
	`creditos` int  NOT NULL,
	`nombre` varchar(130)  NOT NULL,
	
	-- RELAZIONI

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `profesor`
--

CREATE TABLE IF NOT EXISTS `profesor` (
	`apellidos` varchar(130) ,
	`nombres` varchar(130) ,
	
	-- RELAZIONI

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);






