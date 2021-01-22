-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 22, 2021 at 01:44 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `axe1`
--

-- --------------------------------------------------------

--
-- Table structure for table `article`
--

CREATE TABLE `article` (
  `id` bigint(20) NOT NULL,
  `contenue` mediumtext DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `auteur_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `article`
--

INSERT INTO `article` (`id`, `contenue`, `date`, `titre`, `auteur_id`) VALUES
(26, 'Traditionnellement, la psychologie est davantage enracinée dans la dimension négative que dans la dimension positive du fonctionnement humain (Simonton et Baumeister, 2005). Depuis déjà quelques décennies, la recherche en psychologie a mis en exergue que l’humain est biaisé en faveur de la négativité (pour une revue, voir Baumeister, Bratslavsky, Finkenauer, & Vohs, 2001). Qu’il s’agisse par exemple du traitement de l’information, des émotions, des renforcements ou des relations interpersonnelles, la valence négative a un impact supérieur à la valence positive. Baumeister et ses collègues (2001) concluent même que ce biais en faveur de la négativité au détriment de la positivité « may be one of the most basic and far-reaching psychological principles » (p.362).', '2021-01-17 19:50:50', 'La psychologie positive : une approche nécessaire et complémentaire ?', 1);

-- --------------------------------------------------------

--
-- Table structure for table `commentaire`
--

CREATE TABLE `commentaire` (
  `id` bigint(20) NOT NULL,
  `contenue` varchar(255) DEFAULT NULL,
  `article_id` bigint(20) DEFAULT NULL,
  `auteur_id` bigint(20) DEFAULT NULL,
  `date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `commentaire`
--

INSERT INTO `commentaire` (`id`, `contenue`, `article_id`, `auteur_id`, `date`) VALUES
(14, 'Bon Article! Bravo!!', 26, 2, '2021-01-17 20:00:53'),
(15, 'Bien dit 😄', 26, 3, '2021-01-17 20:02:46');

-- --------------------------------------------------------

--
-- Table structure for table `consultation`
--

CREATE TABLE `consultation` (
  `id` bigint(20) NOT NULL,
  `chat_link` varchar(255) DEFAULT NULL,
  `checked` bit(1) DEFAULT NULL,
  `active` bit(1) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `sujet` varchar(255) DEFAULT NULL,
  `patient_id` bigint(20) DEFAULT NULL,
  `psychologue_id` bigint(20) DEFAULT NULL,
  `date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `consultation`
--

INSERT INTO `consultation` (`id`, `chat_link`, `checked`, `active`, `note`, `sujet`, `patient_id`, `psychologue_id`, `date`) VALUES
(75, NULL, b'0', b'0', '', 'Test 1', 2, 3, '2021-01-05 21:18:19'),
(76, NULL, b'0', b'1', '', 'sujet 1', 2, 5, '2021-01-06 22:30:48'),
(80, NULL, b'0', b'1', '', '\nInsomnie', 2, 5, '2021-01-17 20:33:33');

-- --------------------------------------------------------

--
-- Table structure for table `film`
--

CREATE TABLE `film` (
  `id` bigint(20) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `duration` varchar(255) DEFAULT NULL,
  `emplacement` varchar(255) DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `film`
--

INSERT INTO `film` (`id`, `description`, `duration`, `emplacement`, `genre`, `nom`) VALUES
(17, 'The SpongeBob SquarePants', '1h30min', NULL, 'Animation', 'The SpongeBob SquarePants');

-- --------------------------------------------------------

--
-- Table structure for table `film_suggestion`
--

CREATE TABLE `film_suggestion` (
  `id` bigint(20) NOT NULL,
  `message` varchar(255) DEFAULT NULL,
  `nom_film` varchar(255) DEFAULT NULL,
  `treated` bit(1) NOT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `film_suggestion`
--

INSERT INTO `film_suggestion` (`id`, `message`, `nom_film`, `treated`, `user_id`) VALUES
(8, 'Film pour les enfants', 'Frozen', b'0', 3),
(9, '\nfilm de famille', 'Wonder', b'0', 3);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'ADMIN'),
(2, 'PSYCHOLOGUE'),
(3, 'USER');

-- --------------------------------------------------------

--
-- Table structure for table `room_chat`
--

CREATE TABLE `room_chat` (
  `id` bigint(20) NOT NULL,
  `link` varchar(255) DEFAULT NULL,
  `sujet` varchar(255) DEFAULT NULL,
  `creator_id` bigint(20) DEFAULT NULL,
  `chatlink` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `room_chat`
--

INSERT INTO `room_chat` (`id`, `link`, `sujet`, `creator_id`, `chatlink`) VALUES
(30, NULL, 'Donnez nous votre avis sur FreeShare !!', 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `active` bit(1) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `num` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `datenaissance` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `active`, `email`, `num`, `password`, `user_name`, `datenaissance`, `name`, `prenom`, `type`) VALUES
(1, b'1', 'Admin@', '06666', '$2a$10$ZMxZDyTQGyjWNpYUdrLIEe/6dqVpRSD.QfU4.d7PiUQR/J/R/DCA6', 'Admin', '2020', 'Admin', 'Admin', 'Admin'),
(2, b'1', 'user@', '06666', '$2a$10$/obnN7e6JKgkhi.q8vwE5eW0vSbK0ccbQi2YRjoIqB2CvcsJzFcvS', 'User', '2020', 'user', 'user', 'Eleve'),
(3, b'1', 'psychologue@', '0666', '$2a$10$BDeZCwL4GI4LT.YXDx7lgO01OrkEFStb8qp8oCEV/1205tKhoB8.u', 'Psychologue', '2020', 'psychologue', 'psychologue', 'psychologue'),
(5, b'1', 'psychologue1@', '0666', '$2a$10$aUr1mb.UaaWOG/XhcbyEjOZXQuE8Y.d4DFKXgA1Yzvqr2xh55yFGa', 'Psychologue1', '2020', 'psychologue', 'psychologue', 'psychologue');

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `user_id` bigint(20) NOT NULL,
  `roles_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`user_id`, `roles_id`) VALUES
(1, 1),
(2, 3),
(3, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKwr3gq2ua2mdyit2c4appklfh` (`auteur_id`);

--
-- Indexes for table `commentaire`
--
ALTER TABLE `commentaire`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKpl8x2ccino75hr790mhtghbt9` (`article_id`),
  ADD KEY `FKdrcox9f5gj76re4uoj7p5pwbu` (`auteur_id`);

--
-- Indexes for table `consultation`
--
ALTER TABLE `consultation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKcdxphlfiv45qcq8b2kdksqevg` (`patient_id`),
  ADD KEY `FKdwfh1rk9fhrfw9ipkhpubmqtd` (`psychologue_id`);

--
-- Indexes for table `film`
--
ALTER TABLE `film`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `film_suggestion`
--
ALTER TABLE `film_suggestion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKor5y70wftnujocyohspamcf4u` (`user_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_8sewwnpamngi6b1dwaa88askk` (`name`);

--
-- Indexes for table `room_chat`
--
ALTER TABLE `room_chat`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKb807f105at76rh4ysrn4ce5ka` (`creator_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_lqjrcobrh9jc8wpcar64q1bfh` (`user_name`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD KEY `FKj9553ass9uctjrmh0gkqsmv0d` (`roles_id`),
  ADD KEY `FK55itppkw3i07do3h7qoclqd4k` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `article`
--
ALTER TABLE `article`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `commentaire`
--
ALTER TABLE `commentaire`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `consultation`
--
ALTER TABLE `consultation`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT for table `film`
--
ALTER TABLE `film`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `film_suggestion`
--
ALTER TABLE `film_suggestion`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `room_chat`
--
ALTER TABLE `room_chat`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `article`
--
ALTER TABLE `article`
  ADD CONSTRAINT `FKwr3gq2ua2mdyit2c4appklfh` FOREIGN KEY (`auteur_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `commentaire`
--
ALTER TABLE `commentaire`
  ADD CONSTRAINT `FKdrcox9f5gj76re4uoj7p5pwbu` FOREIGN KEY (`auteur_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FKpl8x2ccino75hr790mhtghbt9` FOREIGN KEY (`article_id`) REFERENCES `article` (`id`);

--
-- Constraints for table `consultation`
--
ALTER TABLE `consultation`
  ADD CONSTRAINT `FKcdxphlfiv45qcq8b2kdksqevg` FOREIGN KEY (`patient_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FKdwfh1rk9fhrfw9ipkhpubmqtd` FOREIGN KEY (`psychologue_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `film_suggestion`
--
ALTER TABLE `film_suggestion`
  ADD CONSTRAINT `FKor5y70wftnujocyohspamcf4u` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `room_chat`
--
ALTER TABLE `room_chat`
  ADD CONSTRAINT `FKb807f105at76rh4ysrn4ce5ka` FOREIGN KEY (`creator_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `FK55itppkw3i07do3h7qoclqd4k` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FKj9553ass9uctjrmh0gkqsmv0d` FOREIGN KEY (`roles_id`) REFERENCES `role` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
