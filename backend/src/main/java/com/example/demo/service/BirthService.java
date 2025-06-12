package com.example.demo.service;


import com.example.demo.modal.BirthRequest;
import com.example.demo.repo.BirthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BirthService {
    @Autowired

    private BirthRepository birthRepository;

    public BirthRequest addBirthForm (BirthRequest birthRequest){
        return  birthRepository.save(birthRequest);
    }

    public List <BirthRequest> GetAllbirth (){ return birthRepository.findAll();}


}
