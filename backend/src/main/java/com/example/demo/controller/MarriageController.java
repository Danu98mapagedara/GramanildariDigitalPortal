package com.example.demo.controller;


import com.example.demo.modal.MarriageCertificateRequest;
import com.example.demo.service.MarriageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/marriageform")
public class MarriageController {
     @Autowired
    private MarriageService marriageService;

     @PostMapping
    public MarriageCertificateRequest addMarriageForm (@RequestBody MarriageCertificateRequest marriageCertificateRequest){
         return  marriageService.addMarriageForm(marriageCertificateRequest);
     }

}
