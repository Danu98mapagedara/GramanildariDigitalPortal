package com.example.demo.controller;


import com.example.demo.modal.MarriageCertificateRequest;
import com.example.demo.service.MarriageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/marriageform")
@CrossOrigin(origins = "http://localhost:5173")
public class MarriageController {
     @Autowired
    private MarriageService marriageService;

     @PostMapping
    public MarriageCertificateRequest addMarriageForm (@RequestBody MarriageCertificateRequest marriageCertificateRequest){
         return  marriageService.addMarriageForm(marriageCertificateRequest);
     }

     @GetMapping
    public List<MarriageCertificateRequest> getAllMarriage(){
         return  marriageService.getAllMarriage();
     }

     @PutMapping("/{id}/status")
    public ResponseEntity <MarriageCertificateRequest> updateStatus(@PathVariable Long id,@RequestBody Boolean status){
         MarriageCertificateRequest updated =marriageService.updateStatus(id, status);
         return ResponseEntity.ok(updated);
     }

}

