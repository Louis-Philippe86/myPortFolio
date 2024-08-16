package com.apiportfolio.dal;



import org.springframework.data.jpa.repository.JpaRepository;

import com.apiportfolio.bo.Skill;

public interface SkillsRepository extends JpaRepository<Skill, Long> {
	
}
