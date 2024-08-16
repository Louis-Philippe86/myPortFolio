package com.apiportfolio.dal;

import org.springframework.data.jpa.repository.JpaRepository;

import com.apiportfolio.bo.Card;

public interface CardRepository extends JpaRepository<Card, Long> {
	
}
