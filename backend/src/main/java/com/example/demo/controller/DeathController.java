package com.example.demo.controller;


import com.example.demo.modal.DeathCertificateRequest;
import com.example.demo.service.DeathService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/deathform")
public class DeathController {

    @Autowired
    private DeathService deathService;

    @PostMapping
    public DeathCertificateRequest addDeathForm(@RequestBody DeathCertificateRequest deathCertificateRequest){
        return  deathService.addDeathForm(deathCertificateRequest);
    }
}
