CREATE DATABASE IF NOT EXISTS quiz_portal;
USE quiz_portal;

CREATE TABLE IF NOT EXISTS questions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question_text VARCHAR(255) NOT NULL,
    option_a VARCHAR(100),
    option_b VARCHAR(100),
    option_c VARCHAR(100),
    option_d VARCHAR(100),
    correct_option CHAR(1)
);

INSERT INTO questions (question_text, option_a, option_b, option_c, option_d, correct_option)
VALUES 
('What does SQL stand for?', 'Structured Query Language', 'Simple Query Logic', 'Standard Query List', 'Sequential Query List', 'A'),
('Which language is used for Backend development?', 'CSS', 'HTML', 'Node.js', 'Design', 'C'),
('What is the capital of India?', 'Mumbai', 'New Delhi', 'Hyderabad', 'Chennai', 'B');