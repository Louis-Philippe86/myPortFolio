package com.apiportfolio.dal;

import org.springframework.data.jpa.repository.JpaRepository;

import com.apiportfolio.bo.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {
	
}
