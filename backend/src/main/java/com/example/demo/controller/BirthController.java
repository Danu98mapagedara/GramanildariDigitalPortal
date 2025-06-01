package com.example.demo.controller;


import com.example.demo.modal.BirthRequest;
import com.example.demo.service.BirthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/birthform")
public class BirthController {

    @Autowired
    private BirthService birthService;
@PostMapping
    public BirthRequest addBirthForm(@RequestBody BirthRequest birthRequest){
      return   birthService.addBirthForm(birthRequest);
    }
}
