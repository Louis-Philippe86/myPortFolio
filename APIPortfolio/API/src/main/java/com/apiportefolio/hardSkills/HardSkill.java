package com.apiportefolio.hardSkills;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.apiportefolio.language.Language;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
@Entity
@Table(name = "hardSkills")
public class HardSkill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @OneToOne
    @JoinColumn(name = "idLanguage", referencedColumnName = "id")
    private Language language;
    private int level;
    private boolean framework;

    // Default constructor
    public HardSkill() {
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Language getLanguages() {
        return language;
    }

    public void setLanguages(Language language) {
        this.language = language;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int value) {
        this.level = value;
    }
    public boolean getFramwork() {
        return framework;
    }

    public void setFramwork(boolean framwork) {
        this.framework = framwork;
    }
}