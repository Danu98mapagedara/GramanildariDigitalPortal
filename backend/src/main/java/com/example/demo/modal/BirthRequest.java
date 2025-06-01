package com.example.demo.modal;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.springframework.boot.env.ConfigTreePropertySource;

import java.time.LocalDate;

@Entity
public class BirthRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullNameOfChild;
    private LocalDate dateOfBirth;
    private String placeOfBirth;

    private String gender;
    private String fatherName;
    private String motherName;
    private String address;

    private String requesterName;
    private String requesterNIC;
    private String requesterRelationship;
    private String requesterContact;
    private String requesterEmail;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullNameOfChild() {
        return fullNameOfChild;
    }

    public void setFullNameOfChild(String fullNameOfChild) {
        this.fullNameOfChild = fullNameOfChild;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getPlaceOfBirth() {
        return placeOfBirth;
    }

    public void setPlaceOfBirth(String placeOfBirth) {
        this.placeOfBirth = placeOfBirth;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getFatherName() {
        return fatherName;
    }

    public void setFatherName(String fatherName) {
        this.fatherName = fatherName;
    }

    public String getMotherName() {
        return motherName;
    }

    public void setMotherName(String motherName) {
        this.motherName = motherName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
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
