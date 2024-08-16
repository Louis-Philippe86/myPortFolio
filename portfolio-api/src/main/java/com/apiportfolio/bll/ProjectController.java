package com.apiportfolio.bll;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.apiportfolio.bo.Project;
import com.apiportfolio.dal.ProjectRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {
    @Autowired
    private ProjectRepository projectRepository;

    @GetMapping
    public List<Project> getAllLanguages() {
    	
        return projectRepository.findAll();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Project> getProjectById(@PathVariable Long id){
        Optional<Project> project = projectRepository.findById(id);
        return project.map(ResponseEntity::ok)
                      .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Project> createProject(@RequestBody Project project) {
    	Project savedProject = projectRepository.save(project);
        return new ResponseEntity<>(savedProject, HttpStatus.CREATED);
    }
}

