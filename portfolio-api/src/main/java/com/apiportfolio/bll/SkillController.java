package com.apiportfolio.bll;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.apiportfolio.bo.Skill;
import com.apiportfolio.dal.SkillsRepository;

import java.util.List;

@RestController
@RequestMapping("/api/skills")
public class SkillController {
    @Autowired
    private SkillsRepository skillsRepository;

    @GetMapping
    public List<Skill> getAllSkills() {
    	
        return skillsRepository.findAll();
        
    }

    @PostMapping
    public ResponseEntity<Skill> createSkills(@RequestBody Skill skills) {
    	Skill savedSkill = skillsRepository.save(skills);
        return new ResponseEntity<>(savedSkill, HttpStatus.CREATED);
    }
}

