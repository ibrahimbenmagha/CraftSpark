-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 02 juil. 2024 à 02:13
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `lmoqaf`
--

-- --------------------------------------------------------

--
-- Structure de la table `artisans`
--

CREATE TABLE `artisans` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `phone` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `artisan_ratings`
--

CREATE TABLE `artisan_ratings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `artisan_id` bigint(20) UNSIGNED NOT NULL,
  `rating` int(11) NOT NULL,
  `review` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `chats`
--

CREATE TABLE `chats` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `artisan_id` bigint(20) UNSIGNED NOT NULL,
  `message` text NOT NULL,
  `sent_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `clients`
--

CREATE TABLE `clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `phone` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `clients`
--

INSERT INTO `clients` (`id`, `user_id`, `phone`, `address`, `created_at`, `updated_at`) VALUES
(1, 1, '0771313350', 'oulfa', '2024-07-01 20:33:18', '2024-07-01 20:33:18'),
(2, 2, '0771413350', 'saisisa', '2024-07-01 20:34:19', '2024-07-01 20:34:19'),
(3, 3, '0771413350', 'saisisa', '2024-07-01 20:34:34', '2024-07-01 20:34:34'),
(4, 5, '0771413350', 'saisisa', '2024-07-01 20:36:16', '2024-07-01 20:36:16');

-- --------------------------------------------------------

--
-- Structure de la table `client_ratings`
--

CREATE TABLE `client_ratings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `rating` int(11) NOT NULL,
  `review` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `commandes`
--

CREATE TABLE `commandes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `service_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `total_price` double NOT NULL,
  `status` enum('pending','in progress','completed') NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `artisan_id` bigint(20) UNSIGNED NOT NULL,
  `artisan_service_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0_Users', 1),
(2, '1_Artisans', 1),
(3, '1_Clients', 1),
(4, '1_Services', 1),
(5, '2_Service_artisan', 1),
(6, '3_Commandes', 1),
(7, '4_Artisan_ratings', 1),
(8, '4_Chats', 1),
(9, '4_Client_ratings', 1);

-- --------------------------------------------------------

--
-- Structure de la table `services`
--

CREATE TABLE `services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `service_artisan`
--

CREATE TABLE `service_artisan` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `artisan_id` bigint(20) UNSIGNED NOT NULL,
  `service_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Ibrahim', 'ibrahimbenmagha1190@gmail.com', '$2y$12$m9bIWg62v.fDAf/P.NvCq.D5ra8DVsTz04ChAb.OZ.ujGvYI.Nww6', 'client', NULL, '2024-07-01 20:33:18', '2024-07-01 20:33:18'),
(2, 'Samir halim', 'ibrahimbenmagha123490@gmail.com', '$2y$12$GgO4DXBRa0q/fN1nWX3g0.5pHl3SqcO9aiobEyJJFW5C1jKszwKWy', 'client', NULL, '2024-07-01 20:34:19', '2024-07-01 20:34:19'),
(3, 'Samir katattbg', 'wowo12@gmail.com', '$2y$12$TJsoiXgGMGAeRJQg.7H1quHornfU6dZBnUoZVHvm/4glOEyfEDt1i', 'client', NULL, '2024-07-01 20:34:34', '2024-07-01 20:34:34'),
(4, '7imar 9oban', 'kikikijah@gmail.com', '$2y$12$N5Oqu0y/gXL3qUtXZ9kAzuTPKpjcDDIzgt/l48lQ7TGEzoPDLLbNK', 'admin', NULL, '2024-07-01 20:35:49', '2024-07-01 20:35:49'),
(5, 'Samir sasukie', 'nahshs@gmail.com', '$2y$12$B86sB0pRmKX/4OcMwr3JfOPHd6NoMtOvshP/c6vAjOSgC623a3N1e', 'client', NULL, '2024-07-01 20:36:16', '2024-07-01 20:36:16');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `artisans`
--
ALTER TABLE `artisans`
  ADD PRIMARY KEY (`id`),
  ADD KEY `artisans_user_id_foreign` (`user_id`);

--
-- Index pour la table `artisan_ratings`
--
ALTER TABLE `artisan_ratings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `artisan_ratings_artisan_id_foreign` (`artisan_id`);

--
-- Index pour la table `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `chats_client_id_foreign` (`client_id`),
  ADD KEY `chats_artisan_id_foreign` (`artisan_id`);

--
-- Index pour la table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `clients_user_id_foreign` (`user_id`);

--
-- Index pour la table `client_ratings`
--
ALTER TABLE `client_ratings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `client_ratings_client_id_foreign` (`client_id`);

--
-- Index pour la table `commandes`
--
ALTER TABLE `commandes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `commandes_client_id_foreign` (`client_id`),
  ADD KEY `commandes_artisan_id_foreign` (`artisan_id`),
  ADD KEY `commandes_artisan_service_id_foreign` (`artisan_service_id`);

--
-- Index pour la table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `service_artisan`
--
ALTER TABLE `service_artisan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `service_artisan_artisan_id_foreign` (`artisan_id`),
  ADD KEY `service_artisan_service_id_foreign` (`service_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `artisans`
--
ALTER TABLE `artisans`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `artisan_ratings`
--
ALTER TABLE `artisan_ratings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `chats`
--
ALTER TABLE `chats`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `client_ratings`
--
ALTER TABLE `client_ratings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `commandes`
--
ALTER TABLE `commandes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `service_artisan`
--
ALTER TABLE `service_artisan`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `artisans`
--
ALTER TABLE `artisans`
  ADD CONSTRAINT `artisans_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `artisan_ratings`
--
ALTER TABLE `artisan_ratings`
  ADD CONSTRAINT `artisan_ratings_artisan_id_foreign` FOREIGN KEY (`artisan_id`) REFERENCES `artisans` (`id`);

--
-- Contraintes pour la table `chats`
--
ALTER TABLE `chats`
  ADD CONSTRAINT `chats_artisan_id_foreign` FOREIGN KEY (`artisan_id`) REFERENCES `artisans` (`id`),
  ADD CONSTRAINT `chats_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`);

--
-- Contraintes pour la table `clients`
--
ALTER TABLE `clients`
  ADD CONSTRAINT `clients_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `client_ratings`
--
ALTER TABLE `client_ratings`
  ADD CONSTRAINT `client_ratings_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`);

--
-- Contraintes pour la table `commandes`
--
ALTER TABLE `commandes`
  ADD CONSTRAINT `commandes_artisan_id_foreign` FOREIGN KEY (`artisan_id`) REFERENCES `artisans` (`id`),
  ADD CONSTRAINT `commandes_artisan_service_id_foreign` FOREIGN KEY (`artisan_service_id`) REFERENCES `service_artisan` (`id`),
  ADD CONSTRAINT `commandes_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`);

--
-- Contraintes pour la table `service_artisan`
--
ALTER TABLE `service_artisan`
  ADD CONSTRAINT `service_artisan_artisan_id_foreign` FOREIGN KEY (`artisan_id`) REFERENCES `artisans` (`id`),
  ADD CONSTRAINT `service_artisan_service_id_foreign` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
