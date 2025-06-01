package com.example.demo.controller;


import com.example.demo.modal.DeathCertificateRequest;
import com.example.demo.modal.MarriageCertificateRequest;
import com.example.demo.service.DeathService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/deathform")
public class DeathController {

    @Autowired
    private DeathService deathService;

    @PostMapping
    public DeathCertificateRequest addDeathForm(@RequestBody DeathCertificateRequest deathCertificateRequest){
        return  deathService.addDeathForm(deathCertificateRequest);
    }

    @GetMapping
    public List<DeathCertificateRequest> getAllDeath(){
        return  deathService.getAllDeath();
    }
}
