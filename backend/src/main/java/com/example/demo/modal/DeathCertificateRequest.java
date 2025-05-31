package com.example.demo.modal;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDate;

@Entity
public class DeathCertificateRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String fullNameOfDeceased;

    private LocalDate dateOfDeath;
    private String placeOfDeath;
    private String causeOfDeath;
    private String addressOfDeceased;
    private String requesterName;
    private String requesterNIC;
    private String requesterRelationship;
    private String requesterContact;
    private String requesterEmail;

    // Constructors
    public DeathCertificateRequest() {}

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullNameOfDeceased() {
        return fullNameOfDeceased;
    }

    public void setFullNameOfDeceased(String fullNameOfDeceased) {
        this.fullNameOfDeceased = fullNameOfDeceased;
    }



    public LocalDate getDateOfDeath() {
        return dateOfDeath;
    }

    public void setDateOfDeath(LocalDate dateOfDeath) {
        this.dateOfDeath = dateOfDeath;
    }

    public String getPlaceOfDeath() {
        return placeOfDeath;
    }

    public void setPlaceOfDeath(String placeOfDeath) {
        this.placeOfDeath = placeOfDeath;
    }

    public String getCauseOfDeath() {
        return causeOfDeath;
    }

    public void setCauseOfDeath(String causeOfDeath) {
        this.causeOfDeath = causeOfDeath;
    }

    public String getAddressOfDeceased() {
        return addressOfDeceased;
    }

    public void setAddressOfDeceased(String addressOfDeceased) {
        this.addressOfDeceased = addressOfDeceased;
    }

    public String getRequesterName() {
        return requesterName;
    }

    public void setRequesterName(String requesterName) {
        this.requesterName = requesterName;
    }

    public String getRequesterNIC() {
        return requesterNIC;
    }

    public void setRequesterNIC(String requesterNIC) {
        this.requesterNIC = requesterNIC;
    }

    public String getRequesterRelationship() {
        return requesterRelationship;
    }

    public void setRequesterRelationship(String requesterRelationship) {
        this.requesterRelationship = requesterRelationship;
    }

    public String getRequesterContact() {
        return requesterContact;
    }

    public void setRequesterContact(String requesterContact) {
        this.requesterContact = requesterContact;
    }

    public String getRequesterEmail() {
        return requesterEmail;
    }

    public void setRequesterEmail(String requesterEmail) {
        this.requesterEmail = requesterEmail;
    }
}
