package com.apiportfolio.bll;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.apiportfolio.bo.Career;
import com.apiportfolio.dal.CareerRepository;

import java.util.List;

@RestController
@RequestMapping("/api/careers")
public class CareerController {
    @Autowired
    private CareerRepository careerRepository;

    @GetMapping
    public List<Career> getAllCareers() {
        return careerRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Career> createCareer(@RequestBody Career career) {
        Career savedCareer = careerRepository.save(career);
        return new ResponseEntity<>(savedCareer, HttpStatus.CREATED);
    }
}