package com.example.demo.controller;


import com.example.demo.modal.BirthRequest;
import com.example.demo.service.BirthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/birthform")
@CrossOrigin(origins = "http://localhost:5173")
public class BirthController {

    @Autowired
    private BirthService birthService;
@PostMapping
    public BirthRequest addBirthForm(@RequestBody BirthRequest birthRequest){
      return   birthService.addBirthForm(birthRequest);
    }

    @GetMapping
    public List<BirthRequest>GetAllbirth(){return  birthService.GetAllbirth();}
}
