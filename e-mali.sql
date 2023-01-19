-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 19, 2023 at 03:13 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.8

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
  `id` varchar(20) NOT NULL,
  `user_id` varchar(20) NOT NULL,
  `property_name` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `price` varchar(10) NOT NULL,
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
  `image_03` varchar(50) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `creation_time` datetime DEFAULT current_timestamp(),
  `modification_time` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `property`
--

INSERT INTO `property` (`id`, `user_id`, `property_name`, `address`, `price`, `type`, `offer`, `status`, `furnished`, `deposite`, `bedroom`, `bathroom`, `balcony`, `lift`, `security_guard`, `play_ground`, `garden`, `water_supply`, `power_backup`, `parking_area`, `gym`, `shopping_mall`, `hospital`, `school`, `market_area`, `image_01`, `image_02`, `image_03`, `description`, `creation_time`, `modification_time`) VALUES
('J2jlA5KLjlzPfkjcsTpl', 'hCxVGhs1wanPpoatNhVP', 'house for sale in karen', 'karen, karen blixen ,kenya', '20000000', 'house', 'sale', 'ready to move', 'furnished', '850000', '4', '4', '4', 'no', 'no', 'yes', 'no', 'yes', 'no', 'no', 'yes', 'yes', 'no', 'no', 'no', 'CU096uVpX5jB7Lwip9vn.jpg', '99Xzs3ziOBJsTMZ4cUWb.jpg', '0d3XGz9ARzIgnT82mVp2.jpg', 'This property will have you feeling as if you were in the mountains! Your monthly rent already covers power, water, sewer and trash so all you need to do is move in! Washer and dryer are already in house.', '2022-12-08 00:00:00', NULL),
('58jfdhkubAj7RLQG2ek9', 'hCxVGhs1wanPpoatNhVP', 'Kileleshwa', 'kileshwa , nairobi', '6000000', 'house', 'sale', 'ready to move', 'furnished', '450000', '3', '3', '3', 'no', 'no', 'yes', 'no', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no', '8UomVRRQ2NVnijZiMgOD.jpg', 'fpQAIinV3npCXnqOOkBL.jpg', 'XlVijyVL12eZnLncqSiN.jpg', 'This property will have you feeling as if you were in the mountains! Your monthly rent already covers power, water, sewer and trash so all you need to do is move in! Washer and dryer are already in house', '2022-12-09 00:00:00', NULL),
('YJdKhKylLSULbW4oe9TI', 'hCxVGhs1wanPpoatNhVP', 'Kileleshwa', 'kileshwa , nairobi', '6000000', 'house', 'sale', 'ready to move', 'furnished', '450000', '3', '3', '3', 'no', 'no', 'yes', 'no', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no', 'rirJz63SwvMGKStC8Q0P.jpg', 'pgyotleRBVX4SEjQBZud.jpg', 'wRmKHuL3mxhsYQqi9ILe.jpg', 'This property will have you feeling as if you were in the mountains! Your monthly rent already covers power, water, sewer and trash so all you need to do is move in! Washer and dryer are already in house', '2022-12-09 00:00:00', NULL),
('6krCRvf2IuXPIAw57VsF', 'hCxVGhs1wanPpoatNhVP', 'house for sale in langÃ¡ta', 'lang&#39;ata&#39;, nairobi', '15000000', 'house', 'sale', 'ready to move', 'unfurnished', '1500000', '4', '3', '1', 'no', 'yes', 'no', 'yes', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no', 'EuGVsQ5q4ZePEPSOi0Oo.jpg', 'FHTTEkr1qfCGCo485qXA.jpg', '', 'This property will have you feeling as if you were in the mountains! Your monthly rent already covers power, water, sewer and trash so all you need to do is move in! Washer and dryer are already in house', '2022-12-09 00:00:00', NULL),
('7yv2sclTLXJZwXMW7uTQ', 'hCxVGhs1wanPpoatNhVP', 'house for sale in kilimani', 'lang&#39;ata&#39;, nairobi', '15000000', 'house', 'sale', 'ready to move', 'unfurnished', '1500000', '4', '3', '1', 'no', 'yes', 'no', 'yes', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no', 'UDvGDVR8S9imMhYF5hK0.jpg', '9AbG8uCfFvUDeoSTBHBV.jpg', '', 'This property will have you feeling as if you were in the mountains! Your monthly rent already covers power, water, sewer and trash so all you need to do is move in! Washer and dryer are already in house', '2022-12-09 00:00:00', NULL),
('hnd4wrAm3e4E6aTiCoT6', 'hCxVGhs1wanPpoatNhVP', 'house for sale in kilimani', 'lang&#39;ata&#39;, nairobi', '15000000', 'house', 'sale', 'ready to move', 'unfurnished', '1500000', '4', '3', '1', 'no', 'yes', 'no', 'yes', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no', 'WJVQAVO7U0rdWK7Ts8x8.jpg', 'vF3HC0o7x91mAaWD0Tmd.jpg', '', 'This property will have you feeling as if you were in the mountains! Your monthly rent already covers power, water, sewer and trash so all you need to do is move in! Washer and dryer are already in house', '2022-12-09 00:00:00', '2022-12-14 12:56:59'),
('J2jlA5KLjlzPfkjcsTpl', 'hCxVGhs1wanPpoatNhVP', 'house for sale in karen', 'karen, karen blixen ,kenya', '20000000', 'house', 'sale', 'ready to move', 'furnished', '850000', '4', '4', '4', 'no', 'no', 'yes', 'no', 'yes', 'no', 'no', 'yes', 'yes', 'no', 'no', 'no', 'CU096uVpX5jB7Lwip9vn.jpg', '99Xzs3ziOBJsTMZ4cUWb.jpg', '0d3XGz9ARzIgnT82mVp2.jpg', 'This property will have you feeling as if you were in the mountains! Your monthly rent already covers power, water, sewer and trash so all you need to do is move in! Washer and dryer are already in house.', '2022-12-08 00:00:00', NULL),
('58jfdhkubAj7RLQG2ek9', 'hCxVGhs1wanPpoatNhVP', 'Kileleshwa', 'kileshwa , nairobi', '6000000', 'house', 'sale', 'ready to move', 'furnished', '450000', '3', '3', '3', 'no', 'no', 'yes', 'no', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no', '8UomVRRQ2NVnijZiMgOD.jpg', 'fpQAIinV3npCXnqOOkBL.jpg', 'XlVijyVL12eZnLncqSiN.jpg', 'This property will have you feeling as if you were in the mountains! Your monthly rent already covers power, water, sewer and trash so all you need to do is move in! Washer and dryer are already in house', '2022-12-09 00:00:00', NULL),
('YJdKhKylLSULbW4oe9TI', 'hCxVGhs1wanPpoatNhVP', 'Kileleshwa', 'kileshwa , nairobi', '6000000', 'house', 'sale', 'ready to move', 'furnished', '450000', '3', '3', '3', 'no', 'no', 'yes', 'no', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no', 'rirJz63SwvMGKStC8Q0P.jpg', 'pgyotleRBVX4SEjQBZud.jpg', 'wRmKHuL3mxhsYQqi9ILe.jpg', 'This property will have you feeling as if you were in the mountains! Your monthly rent already covers power, water, sewer and trash so all you need to do is move in! Washer and dryer are already in house', '2022-12-09 00:00:00', NULL),
('6krCRvf2IuXPIAw57VsF', 'hCxVGhs1wanPpoatNhVP', 'house for sale in langÃ¡ta', 'lang&#39;ata&#39;, nairobi', '15000000', 'house', 'sale', 'ready to move', 'unfurnished', '1500000', '4', '3', '1', 'no', 'yes', 'no', 'yes', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no', 'EuGVsQ5q4ZePEPSOi0Oo.jpg', 'FHTTEkr1qfCGCo485qXA.jpg', '', 'This property will have you feeling as if you were in the mountains! Your monthly rent already covers power, water, sewer and trash so all you need to do is move in! Washer and dryer are already in house', '2022-12-09 00:00:00', NULL),
('7yv2sclTLXJZwXMW7uTQ', 'hCxVGhs1wanPpoatNhVP', 'house for sale in kilimani', 'lang&#39;ata&#39;, nairobi', '15000000', 'house', 'sale', 'ready to move', 'unfurnished', '1500000', '4', '3', '1', 'no', 'yes', 'no', 'yes', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no', 'UDvGDVR8S9imMhYF5hK0.jpg', '9AbG8uCfFvUDeoSTBHBV.jpg', '', 'This property will have you feeling as if you were in the mountains! Your monthly rent already covers power, water, sewer and trash so all you need to do is move in! Washer and dryer are already in house', '2022-12-09 00:00:00', NULL),
('hnd4wrAm3e4E6aTiCoT6', 'hCxVGhs1wanPpoatNhVP', 'house for sale in kilimani', 'lang&#39;ata&#39;, nairobi', '15000000', 'house', 'sale', 'ready to move', 'unfurnished', '1500000', '4', '3', '1', 'no', 'yes', 'no', 'yes', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no', 'WJVQAVO7U0rdWK7Ts8x8.jpg', 'vF3HC0o7x91mAaWD0Tmd.jpg', '', 'This property will have you feeling as if you were in the mountains! Your monthly rent already covers power, water, sewer and trash so all you need to do is move in! Washer and dryer are already in house', '2022-12-09 00:00:00', '2022-12-14 12:56:59'),
('8ZdUIf0hANJ1kdNHShoU', 'J4vMbogOrQNQJTPm25u2', 'Karen, ', 'Nairobi Karen', '500000', 'flat', 'sale', 'under construction', 'unfurnished', '30000', '3', '2', '2', 'yes', 'no', 'no', 'yes', 'no', 'no', 'yes', 'no', 'no', 'no', 'no', 'no', '8CrmIht9I5SvRzpmUbOX.jpg', 'L8FFsUQxTix9eDMPwnTX.jpg', '', 'This property will have you feeling as if you were...', NULL, NULL),
('EzYh2XIHk4Q3DortOYmn', 'J4vMbogOrQNQJTPm25u2', 'Karen, ', 'Nairobi Karen', '6000000', 'flat', 'sale', 'ready to move', 'furnished', '400000', '1', '1', '0', 'no', 'no', 'yes', 'no', 'yes', 'no', 'yes', 'no', 'yes', 'no', 'no', 'yes', 'xCKrTngsERWb8M5pRYJV.jpg', 'WmTV0HW0iuZ2ByIV1GR0.jpg', '', 'This property will have you feeling as if you were...', NULL, NULL),
('Cy41o91ivU2briG7joQq', 'IcD7PZnzEo5bErH0NLDS', 'house for sale in Karen', 'Nairobi Karen', '400000', 'house', 'sale', 'ready to move', 'furnished', '20000', '4', '4', '0', 'yes', 'yes', 'no', 'yes', 'no', 'no', 'yes', 'yes', 'no', 'no', 'no', 'no', 'nHKAWb3HmWvbA3GUgxcn.jpg', 'ec2sj3IxTCewdZyKAXC5.jpg', 'CoOH5gS6eFVzU7yof3ui.jpg', 'This property will have you feeling as if you were...', '2022-12-21 17:48:36', NULL),
('bZs0K0oFgebN7v7dYoEM', 'YavUNoKdTkhOEgKNYCWd', 'house for sale in kilimani', 'Nairobi Kilimani', '50000000', 'house', 'sale', 'ready to move', 'semi-furnished', '200000', '3', '2', '1', 'yes', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', '2PeOTNjgU8YySzF8HAJg.jpg', 'bRuEhqZAcON44FsbyEg7.jpg', '', 'Enter your house details above and click the Generate description button to see a custom social copy display here', '2022-12-21 23:53:23', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(10) NOT NULL,
  `first_name` varchar(40) NOT NULL,
  `last_name` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(40) NOT NULL,
  `user_role` int(8) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `first_name`, `last_name`, `email`, `password`, `user_role`) VALUES
(1, 'jerrey', 'munroe', 'jerrey@jerrey', 'jerrey', 1),
(2, 'a', 'b', 'a@a', 'a', 2);

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `id` int(8) NOT NULL,
  `role` enum('buyer','seller','valuer','agent','admin') NOT NULL DEFAULT 'buyer'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
