-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 20, 2023 at 02:33 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `e-mali`
--

-- --------------------------------------------------------

--
-- Table structure for table `property`
--

CREATE TABLE `property` (
  `property_id` int(10) NOT NULL,
  `id` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `user_id` varchar(20) NOT NULL,
  `property_name` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `price` int(10) NOT NULL,
  `type` varchar(10) NOT NULL,
  `offer` varchar(10) NOT NULL,
  `status` varchar(50) NOT NULL,
  `furnished` varchar(50) NOT NULL,
  `deposite` varchar(10) NOT NULL,
  `bedroom` varchar(10) NOT NULL,
  `bathroom` varchar(10) NOT NULL,
  `balcony` varchar(10) NOT NULL,
  `lift` varchar(3) NOT NULL DEFAULT 'no',
  `security_guard` varchar(3) NOT NULL DEFAULT 'no',
  `play_ground` varchar(3) NOT NULL DEFAULT 'no',
  `garden` varchar(3) NOT NULL DEFAULT 'no',
  `water_supply` varchar(3) NOT NULL DEFAULT 'no',
  `power_backup` varchar(3) NOT NULL DEFAULT 'no',
  `parking_area` varchar(3) NOT NULL DEFAULT 'no',
  `gym` varchar(3) NOT NULL DEFAULT 'no',
  `shopping_mall` varchar(3) NOT NULL DEFAULT 'no',
  `hospital` varchar(3) NOT NULL DEFAULT 'no',
  `school` varchar(3) NOT NULL DEFAULT 'no',
  `market_area` varchar(3) NOT NULL DEFAULT 'no',
  `image_01` varchar(50) NOT NULL,
  `image_02` varchar(50) NOT NULL,
  `image_03` varchar(50) NOT NULL DEFAULT 'wRmKHuL3mxhsYQqi9ILe.jpg',
  `description` varchar(1000) NOT NULL,
  `creation_time` datetime DEFAULT current_timestamp(),
  `modification_time` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `valuated` enum('Approved','Pending Payment','Pending Approval','Declined') NOT NULL DEFAULT 'Pending Payment'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `property`
--

INSERT INTO `property` (`property_id`, `id`, `user_id`, `property_name`, `address`, `price`, `type`, `offer`, `status`, `furnished`, `deposite`, `bedroom`, `bathroom`, `balcony`, `lift`, `security_guard`, `play_ground`, `garden`, `water_supply`, `power_backup`, `parking_area`, `gym`, `shopping_mall`, `hospital`, `school`, `market_area`, `image_01`, `image_02`, `image_03`, `description`, `creation_time`, `modification_time`, `valuated`) VALUES
(1, 'J2jlA5KLjlzPfkjcsTpl', '2', 'house for sale in karen', 'karen, karen blixen ,kenya', 20000000, 'house', 'sale', 'ready to move', 'furnished', '850000', '4', '4', '4', 'no', 'no', 'yes', 'no', 'yes', 'no', 'no', 'yes', 'yes', 'no', 'no', 'no', 'CU096uVpX5jB7Lwip9vn.jpg', '99Xzs3ziOBJsTMZ4cUWb.jpg', '0d3XGz9ARzIgnT82mVp2.jpg', 'This property will have you feeling as if you were in the mountains! Your monthly rent already covers power, water, sewer and trash so all you need to do is move in! Washer and dryer are already in house.', '2022-12-08 00:00:00', '2023-01-20 15:34:17', 'Approved'),
(2, '58jfdhkubAj7RLQG2ek9', '2', 'Kileleshwa', 'kileshwa , nairobi', 6000000, 'house', 'sale', 'ready to move', 'furnished', '450000', '3', '3', '3', 'no', 'no', 'yes', 'no', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no', '8UomVRRQ2NVnijZiMgOD.jpg', 'fpQAIinV3npCXnqOOkBL.jpg', 'XlVijyVL12eZnLncqSiN.jpg', 'This property will have you feeling as if you were in the mountains! Your monthly rent already covers power, water, sewer and trash so all you need to do is move in! Washer and dryer are already in house', '2022-12-09 00:00:00', '2023-01-20 15:34:23', 'Approved'),
(3, 'YJdKhKylLSULbW4oe9TI', '2', 'Kileleshwa', 'kileshwa , nairobi', 6000000, 'house', 'sale', 'ready to move', 'furnished', '450000', '3', '3', '3', 'no', 'no', 'yes', 'no', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no', 'rirJz63SwvMGKStC8Q0P.jpg', 'pgyotleRBVX4SEjQBZud.jpg', 'wRmKHuL3mxhsYQqi9ILe.jpg', 'This property will have you feeling as if you were in the mountains! Your monthly rent already covers power, water, sewer and trash so all you need to do is move in! Washer and dryer are already in house', '2022-12-09 00:00:00', '2023-01-20 16:30:24', 'Pending Approval'),
(4, '6krCRvf2IuXPIAw57VsF', '2', 'house for sale in langÃ¡ta', 'lang&#39;ata&#39;, nairobi', 15000000, 'house', 'sale', 'ready to move', 'unfurnished', '1500000', '4', '3', '1', 'no', 'yes', 'no', 'yes', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no', 'EuGVsQ5q4ZePEPSOi0Oo.jpg', 'FHTTEkr1qfCGCo485qXA.jpg', '0d3XGz9ARzIgnT82mVp2.jpg', 'This property will have you feeling as if you were in the mountains! Your monthly rent already covers power, water, sewer and trash so all you need to do is move in! Washer and dryer are already in house', '2022-12-09 00:00:00', '2023-01-20 16:30:43', 'Pending Approval'),
(5, '7yv2sclTLXJZwXMW7uTQ', '2', 'house for sale in kilimani', 'lang&#39;ata&#39;, nairobi', 15000000, 'house', 'sale', 'ready to move', 'unfurnished', '1500000', '4', '3', '1', 'no', 'yes', 'no', 'yes', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no', 'UDvGDVR8S9imMhYF5hK0.jpg', '9AbG8uCfFvUDeoSTBHBV.jpg', '0d3XGz9ARzIgnT82mVp2.jpg', 'This property will have you feeling as if you were in the mountains! Your monthly rent already covers power, water, sewer and trash so all you need to do is move in! Washer and dryer are already in house', '2022-12-09 00:00:00', '2023-01-20 16:32:45', 'Pending Approval'),
(6, 'hnd4wrAm3e4E6aTiCoT6', '2', 'house for sale in kilimani', 'lang&#39;ata&#39;, nairobi', 15000000, 'house', 'sale', 'ready to move', 'unfurnished', '1500000', '4', '3', '1', 'no', 'yes', 'no', 'yes', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no', 'WJVQAVO7U0rdWK7Ts8x8.jpg', 'vF3HC0o7x91mAaWD0Tmd.jpg', '0d3XGz9ARzIgnT82mVp2.jpg', 'This property will have you feeling as if you were in the mountains! Your monthly rent already covers power, water, sewer and trash so all you need to do is move in! Washer and dryer are already in house', '2022-12-09 00:00:00', '2023-01-20 10:12:32', 'Pending Payment'),
(7, 'J2jlA5KLjlzPfkjcsTpl', '1', 'house for sale in karen', 'karen, karen blixen ,kenya', 20000000, 'house', 'sale', 'ready to move', 'furnished', '850000', '4', '4', '4', 'no', 'no', 'yes', 'no', 'yes', 'no', 'no', 'yes', 'yes', 'no', 'no', 'no', 'CU096uVpX5jB7Lwip9vn.jpg', '99Xzs3ziOBJsTMZ4cUWb.jpg', '0d3XGz9ARzIgnT82mVp2.jpg', 'This property will have you feeling as if you were in the mountains! Your monthly rent already covers power, water, sewer and trash so all you need to do is move in! Washer and dryer are already in house.', '2022-12-08 00:00:00', '2023-01-20 10:12:38', 'Pending Payment'),
(8, '58jfdhkubAj7RLQG2ek9', '1', 'Kileleshwa', 'kileshwa , nairobi', 6000000, 'house', 'sale', 'ready to move', 'furnished', '450000', '3', '3', '3', 'no', 'no', 'yes', 'no', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no', '8UomVRRQ2NVnijZiMgOD.jpg', 'fpQAIinV3npCXnqOOkBL.jpg', 'XlVijyVL12eZnLncqSiN.jpg', 'This property will have you feeling as if you were in the mountains! Your monthly rent already covers power, water, sewer and trash so all you need to do is move in! Washer and dryer are already in house', '2022-12-09 00:00:00', '2023-01-20 10:12:44', 'Pending Payment'),
(9, 'YJdKhKylLSULbW4oe9TI', '1', 'Kileleshwa', 'kileshwa , nairobi', 6000000, 'house', 'sale', 'ready to move', 'furnished', '450000', '3', '3', '3', 'no', 'no', 'yes', 'no', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no', 'rirJz63SwvMGKStC8Q0P.jpg', 'pgyotleRBVX4SEjQBZud.jpg', 'wRmKHuL3mxhsYQqi9ILe.jpg', 'This property will have you feeling as if you were in the mountains! Your monthly rent already covers power, water, sewer and trash so all you need to do is move in! Washer and dryer are already in house', '2022-12-09 00:00:00', '2023-01-20 10:12:47', 'Pending Payment'),
(10, '6krCRvf2IuXPIAw57VsF', '1', 'house for sale in langÃ¡ta', 'lang&#39;ata&#39;, nairobi', 15000000, 'house', 'sale', 'ready to move', 'unfurnished', '1500000', '4', '3', '1', 'no', 'yes', 'no', 'yes', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no', 'EuGVsQ5q4ZePEPSOi0Oo.jpg', 'FHTTEkr1qfCGCo485qXA.jpg', '0d3XGz9ARzIgnT82mVp2.jpg', 'This property will have you feeling as if you were in the mountains! Your monthly rent already covers power, water, sewer and trash so all you need to do is move in! Washer and dryer are already in house', '2022-12-09 00:00:00', '2023-01-20 10:12:55', 'Pending Payment'),
(11, '7yv2sclTLXJZwXMW7uTQ', '1', 'house for sale in kilimani', 'lang&#39;ata&#39;, nairobi', 15000000, 'house', 'sale', 'ready to move', 'unfurnished', '1500000', '4', '3', '1', 'no', 'yes', 'no', 'yes', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no', 'UDvGDVR8S9imMhYF5hK0.jpg', '9AbG8uCfFvUDeoSTBHBV.jpg', '0d3XGz9ARzIgnT82mVp2.jpg', 'This property will have you feeling as if you were in the mountains! Your monthly rent already covers power, water, sewer and trash so all you need to do is move in! Washer and dryer are already in house', '2022-12-09 00:00:00', '2023-01-20 10:12:58', 'Pending Payment'),
(12, 'hnd4wrAm3e4E6aTiCoT6', '1', 'house for sale in kilimani', 'lang&#39;ata&#39;, nairobi', 15000000, 'house', 'sale', 'ready to move', 'unfurnished', '1500000', '4', '3', '1', 'no', 'yes', 'no', 'yes', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no', 'WJVQAVO7U0rdWK7Ts8x8.jpg', 'vF3HC0o7x91mAaWD0Tmd.jpg', '0d3XGz9ARzIgnT82mVp2.jpg', 'This property will have you feeling as if you were in the mountains! Your monthly rent already covers power, water, sewer and trash so all you need to do is move in! Washer and dryer are already in house', '2022-12-09 00:00:00', '2023-01-20 10:13:02', 'Pending Payment'),
(13, '8ZdUIf0hANJ1kdNHShoU', '1', 'Karen, ', 'Nairobi Karen', 500000, 'flat', 'sale', 'under construction', 'unfurnished', '30000', '3', '2', '2', 'yes', 'no', 'no', 'yes', 'no', 'no', 'yes', 'no', 'no', 'no', 'no', 'no', '8CrmIht9I5SvRzpmUbOX.jpg', 'L8FFsUQxTix9eDMPwnTX.jpg', '0d3XGz9ARzIgnT82mVp2.jpg', 'This property will have you feeling as if you were...', NULL, '2023-01-20 10:13:06', 'Pending Payment'),
(14, 'EzYh2XIHk4Q3DortOYmn', '1', 'Karen, ', 'Nairobi Karen', 6000000, 'flat', 'sale', 'ready to move', 'furnished', '400000', '1', '1', '0', 'no', 'no', 'yes', 'no', 'yes', 'no', 'yes', 'no', 'yes', 'no', 'no', 'yes', 'xCKrTngsERWb8M5pRYJV.jpg', 'WmTV0HW0iuZ2ByIV1GR0.jpg', '0d3XGz9ARzIgnT82mVp2.jpg', 'This property will have you feeling as if you were...', NULL, '2023-01-20 10:13:10', 'Pending Payment'),
(15, 'Cy41o91ivU2briG7joQq', '1', 'house for sale in Karen', 'Nairobi Karen', 400000, 'house', 'sale', 'ready to move', 'furnished', '20000', '4', '4', '0', 'yes', 'yes', 'no', 'yes', 'no', 'no', 'yes', 'yes', 'no', 'no', 'no', 'no', 'nHKAWb3HmWvbA3GUgxcn.jpg', 'ec2sj3IxTCewdZyKAXC5.jpg', 'CoOH5gS6eFVzU7yof3ui.jpg', 'This property will have you feeling as if you were...', '2022-12-21 17:48:36', '2023-01-20 10:13:13', 'Pending Payment'),
(16, 'bZs0K0oFgebN7v7dYoEM', '1', 'house for sale in kilimani', 'Nairobi Kilimani', 50000000, 'house', 'sale', 'ready to move', 'semi-furnished', '200000', '3', '2', '1', 'yes', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', '2PeOTNjgU8YySzF8HAJg.jpg', 'bRuEhqZAcON44FsbyEg7.jpg', '0d3XGz9ARzIgnT82mVp2.jpg', 'Enter your house details above and click the Generate description button to see a custom social copy display here', '2022-12-21 23:53:23', '2023-01-20 10:13:17', 'Pending Payment');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(10) NOT NULL,
  `first_name` varchar(40) NOT NULL,
  `last_name` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` longtext NOT NULL,
  `user_role` int(8) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `first_name`, `last_name`, `email`, `password`, `user_role`) VALUES
(1, 'a', 'a', 'a@a', '$2a$10$1AUjWaSBXmKEQQkwqey9EuB0mA1wIY41.CsVApdabD8ukG12QqAYC', 2),
(2, 'z', 'z', 'z@z', '$2a$10$LSi52Sv61DOgJzmwOQo.jOELctTSCHT1snus7z/Ejx4h.VeBRTw3y', 3),
(3, 'w', 'w', 'w@w', '$2a$10$WRGtfX4v2SASnic2ieN5eOmdHmBa0mYzVVekrcuhs/nkVpCY50Fzq', 3),
(4, 'h', 'h', 'h@h', '$2a$10$GU5G1nnyqsHKekouQ19uhunZ0qLW7y8d6fUyGNO9KymJgHoaxGkKi', 2);

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `id` int(8) NOT NULL,
  `role` enum('buyer','seller','valuer','agent','admin') NOT NULL DEFAULT 'buyer'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`id`, `role`) VALUES
(1, 'admin'),
(2, 'buyer'),
(3, 'seller'),
(4, 'agent'),
(5, 'valuer');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `property`
--
ALTER TABLE `property`
  ADD PRIMARY KEY (`property_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `fk_role_id` (`user_role`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `property`
--
ALTER TABLE `property`
  MODIFY `property_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user_roles`
--
ALTER TABLE `user_roles`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_role_id` FOREIGN KEY (`user_role`) REFERENCES `user_roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
