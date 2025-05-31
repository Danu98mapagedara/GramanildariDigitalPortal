package com.example.demo.modal;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDate;

@Entity
public class MarriageCertificateRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private String brideFullName;
    private String groomFullName;
    private LocalDate marriageDate;
    private String placeOfMarriage;

    private String addressBride;
    private String addressGroom;
    private String contactNumber;
    private String email;



    // Constructors
    public MarriageCertificateRequest() {}

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBrideFullName() {
        return brideFullName;
    }

    public void setBrideFullName(String brideFullName) {
        this.brideFullName = brideFullName;
    }

    public String getGroomFullName() {
        return groomFullName;
    }

    public void setGroomFullName(String groomFullName) {
        this.groomFullName = groomFullName;
    }

    public LocalDate getMarriageDate() {
        return marriageDate;
    }

    public void setMarriageDate(LocalDate marriageDate) {
        this.marriageDate = marriageDate;
    }

    public String getPlaceOfMarriage() {
        return placeOfMarriage;
    }

    public void setPlaceOfMarriage(String placeOfMarriage) {
        this.placeOfMarriage = placeOfMarriage;
    }

    public String getAddressBride() {
        return addressBride;
    }

    public void setAddressBride(String addressBride) {
        this.addressBride = addressBride;
    }

    public String getAddressGroom() {
        return addressGroom;
    }

    public void setAddressGroom(String addressGroom) {
        this.addressGroom = addressGroom;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
