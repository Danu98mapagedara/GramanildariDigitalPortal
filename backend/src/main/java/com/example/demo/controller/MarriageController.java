package com.example.demo.controller;


import com.example.demo.modal.MarriageCertificateRequest;
import com.example.demo.service.MarriageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/marriageform")
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
}
