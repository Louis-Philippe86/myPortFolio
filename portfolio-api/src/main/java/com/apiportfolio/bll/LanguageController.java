package com.apiportfolio.bll;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.apiportfolio.bo.Language;
import com.apiportfolio.dal.LanguageRepository;

import java.util.List;

@RestController
@RequestMapping("/api/languages")
public class LanguageController {
    @Autowired
    private LanguageRepository languageRepository;

    @GetMapping
    public List<Language> getAllLanguages() {
    	
        return languageRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Language> createLanguage(@RequestBody Language language) {
        Language savedLanguage = languageRepository.save(language);
        return new ResponseEntity<>(savedLanguage, HttpStatus.CREATED);
    }
}

