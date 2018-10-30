-- phpMyAdmin SQL Dump
-- version 4.0.10deb1ubuntu0.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 29, 2018 at 07:22 PM
-- Server version: 5.6.33-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `Things`
--

CREATE TABLE IF NOT EXISTS `Things` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `info` varchar(255) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=20 ;

--
-- Dumping data for table `Things`
--

INSERT INTO `Things` (`_id`, `name`, `info`, `active`) VALUES
(14, 'Development Tools', 'Integration with popular tools such as Webpack, Babel, TypeScript, Karma, Mocha, ESLint, Protractor, Pug, Stylus, Sass, and Less.', NULL),
(15, 'Server and Client integration', 'Built with a powerful and fun stack: MongoDB, Express, Angular, and Node.', NULL),
(16, 'Smart Build System', 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your app.html', NULL),
(17, 'Modular Structure', 'Best practice client and server structures allow for more code reusability and maximum scalability', NULL),
(18, 'Optimized Build', 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.', NULL),
(19, 'Deployment Ready', 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE IF NOT EXISTS `Users` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT 'user',
  `password` varchar(255) DEFAULT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `salt` varchar(255) DEFAULT NULL,
  `acebook` varchar(255) DEFAULT NULL,
  `twitter` varchar(255) DEFAULT NULL,
  `google` varchar(255) DEFAULT NULL,
  `github` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`_id`),
  UNIQUE KEY `Users_email_unique` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`_id`, `name`, `email`, `role`, `password`, `provider`, `salt`, `acebook`, `twitter`, `google`, `github`) VALUES
(5, 'Test User', 'test@example.com', 'user', 'Vu3cuLFOuIipzR1f+5JeOWipIsxb0OMxnDkS9YT4B+b0JXm/9GNIt28EDKp/6WNs0xxgYpuTtS+mOevVXwraDg==', 'local', 'XoeWi93VYmDOykU5Cyw9gA==', NULL, NULL, NULL, NULL),
(6, 'Admin', 'admin@example.com', 'admin', 'g3D4RS328otDZe3yEJsOlkXGpQKMsUpFoR/+4FCKb3kGkjcvjfOs8gzotoG23HNJb09oXThO7S1NiZD/ZQ3t5g==', 'local', 'BrpNkB+gFaYkxojNJoq4FQ==', NULL, NULL, NULL, NULL);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
