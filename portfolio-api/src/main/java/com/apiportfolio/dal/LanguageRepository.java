package com.apiportfolio.dal;

import org.springframework.data.jpa.repository.JpaRepository;

import com.apiportfolio.bo.Language;

public interface LanguageRepository extends JpaRepository<Language, Long> {
	
}
