CREATE TABLE IF NOT EXISTS `Repositories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `repo_name` varchar(50) NOT NULL,
  `repo_Description` varchar(MAX) NOT NULL,
  `book_URL` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;