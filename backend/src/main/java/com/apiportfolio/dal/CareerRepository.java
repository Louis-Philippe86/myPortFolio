package com.apiportfolio.dal;

import org.springframework.data.jpa.repository.JpaRepository;

import com.apiportfolio.bo.Career;

public interface CareerRepository extends JpaRepository<Career, Long> {}