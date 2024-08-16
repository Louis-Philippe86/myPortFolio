package com.apiportfolio.bo;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;


@Entity
@Table(name = "card")
public class Card {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;  

    private String urlCardPicture;
    private String hrefUrl;
    
    @OneToOne(mappedBy="card")
    private Project project;

    @ManyToMany
    @JoinTable(
  		  name = "card_language", 
  		  joinColumns = @JoinColumn (name = "card_id"), 
  		  inverseJoinColumns = @JoinColumn (name = "language_id"))
    private List<Language> languages;  

    // Constructeurs
    public Card() {
    }

    public Card(String title, String description, String urlCardPicture, String hrefUrl, Project project) {
        this.title = title;
        this.description = description;
        this.urlCardPicture = urlCardPicture;
        this.hrefUrl = hrefUrl;
        this.project = project;
    }

    // Getters et Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUrlCardPicture() {
        return urlCardPicture;
    }

    public void setUrlCardPicture(String urlCardPicture) {
        this.urlCardPicture = urlCardPicture;
    }

    public String getHrefUrl() {
        return hrefUrl;
    }

    public void setHrefUrl(String hrefUrl) {
        this.hrefUrl = hrefUrl;
    }

    public Project isProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public List<Language> getLanguages() {
        return languages;
    }

    public void setLanguages(List<Language> languages) {
        this.languages = languages;
    }
}

    