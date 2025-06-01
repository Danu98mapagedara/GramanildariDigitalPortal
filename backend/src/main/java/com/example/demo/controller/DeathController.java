package com.example.demo.controller;


import com.example.demo.modal.DeathCertificateRequest;
import com.example.demo.modal.MarriageCertificateRequest;
import com.example.demo.service.DeathService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("api/deathform")
public class DeathController {

    @Autowired
    private DeathService deathService;

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> addDeathForm(
            @RequestParam String fullNameOfDeceased,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dateOfDeath,
            @RequestParam String placeOfDeath,
            @RequestParam String causeOfDeath,
            @RequestParam String addressOfDeceased,
            @RequestParam String requesterName,
            @RequestParam String requesterNIC,
            @RequestParam String requesterRelationship,
            @RequestParam String requesterContact,
            @RequestParam String requesterEmail,
            @RequestParam("identityImage") MultipartFile identityImage
    ) throws IOException {

        DeathCertificateRequest saved = deathService.addDeathForm(
                fullNameOfDeceased, dateOfDeath, placeOfDeath, causeOfDeath,
                addressOfDeceased, requesterName, requesterNIC, requesterRelationship,
                requesterContact, requesterEmail, identityImage
        );

        return ResponseEntity.ok("Death form submitted with image ID: " + saved.getId());
    }
    @GetMapping
    public List<DeathCertificateRequest> getAllDeath(){
        return  deathService.getAllDeath();
    }
}
