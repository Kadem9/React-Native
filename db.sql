-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : sam. 22 avr. 2023 à 16:01
-- Version du serveur : 5.7.24
-- Version de PHP : 8.1.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `manieduc`
--

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `club_id` int(11) DEFAULT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fonctions` longtext COLLATE utf8mb4_unicode_ci,
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `number_phone` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `club_id`, `email`, `roles`, `password`, `firstname`, `lastname`, `fonctions`, `photo`, `number_phone`) VALUES
(6, 1, 'kg@asmanissieux.fr', '[\"ROLE_ADMIN\"]', '$2y$13$voP/rWyN1aV3.EpoSoNZh8O98FVpm/A7GR4ZkfAmFUEXFhsv35uoq2', 'Kadem', 'Garniera', 'Educateur U12/U13', '77b39f169d42852ac63f1ddff697b832.jpg', 0),
(15, 9, 'conttact@asmanissieux.fr', '[]', '$2y$13$voP/rWyN1V3.EpoaSoNZh8O98FVpm/A7GR4ZkfAmFUEXFhsv35uoq2', 'Nicolas', 'Fournier', 'Membre du comité', '414a10d31f9e4bcd81ce99abc03d8126.png', 0),
(16, 5, 'u13@asmanissieux.fr', '[]', '$2y$13$voP/rWyN1V3.EpoSoNZh8O98FVpam/A7GR4ZkfAmFUEXFhsv35uoq2', 'Corentin', 'Fournier', 'Educateur', 'fe84a9d11006b00be1563f60276573a9.png', 0),
(17, 21, 'kadem.garnier@outlook.fr', '[\"ROLE_ADMIN\"]', '$2y$13$vaoP/rWyN1V3.EpoSoNZh8O98FVpm/A7GR4ZkfAmFUEXFhsv35uoq2', 'Pierrick', 'Akosz', 'Educateur U12/U13', '6c006e4aae308bc0cf1033fc8aaab58b.jpg', 0),
(18, 2, 'tamtara93150@outlook.fr', '[]', '$2y$13$voP/rWyN1V3.EpoSoNZh8Oa98FVpm/A7GR4ZkfAmFUEXFhsv35uoq2', 'Corenti', 'Fournier', 'Éducateur U10-U11', '9449934f6730e7163fe0cf7185fb9157.jpg', 0),
(19, 2, 'kadem.garnier@ecole-isitech.fr', '[]', '$2y$13$voP/rWyN1V3.EpoaSoNZh8O98FVpm/A7GR4ZkfAmFUEXFhsv35uoq2', 'NICOLAS', 'FOURNIER', NULL, 'b9656c7747e6fa2e4808e1c1901da061.jpg', 0),
(20, 3, 'fcbm@live.fr', '[]', '$2y$13$voP/rWyN1V3.EpoSoNZha8O98FVpm/A7GR4ZkfAmFUEXFhsv35uoq2', 'Enzo', 'Loncle Tarm', 'Educateur U7/U9/U11/U13 et joueur', '67d90fb4f98d9e7d5e5eb0af3b21452e.jpg', 0),
(21, 1, 'ranking@live.fr', '[]', '$2y$13$voP/rWyN1V3.EpoSoNZh8O98FVpm/A7GR4ZkfAmFUEXFhsv35uoq2a', 'Mayweather', 'Ranking', 'Educateur', 'fdbfee6e4baa5be6af1696619dd77e89.jpg', 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`),
  ADD KEY `IDX_8D93D64961190A32` (`club_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FK_8D93D64961190A32` FOREIGN KEY (`club_id`) REFERENCES `club` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
