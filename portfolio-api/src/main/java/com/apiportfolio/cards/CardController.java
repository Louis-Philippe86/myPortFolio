package com.apiportfolio.cards;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cards")
public class CardController {
    @Autowired
    private CardRepository cardRepository;

    @GetMapping
    public List<Card> getAllCards() {
    	
        return cardRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Card> createCard(@RequestBody Card card) {
        Card savedCard = cardRepository.save(card);
        return new ResponseEntity<>(savedCard, HttpStatus.CREATED);
    }
}

