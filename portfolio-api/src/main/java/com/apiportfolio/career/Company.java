package com.apiportfolio.career;

import jakarta.persistence.Embeddable;

@Embeddable
public class Company {
    private String name;
    private String city;

    // Getters and setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
}

