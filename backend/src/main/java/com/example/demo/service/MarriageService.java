package com.example.demo.service;

import com.example.demo.modal.MarriageCertificateRequest;
import com.example.demo.repo.MarriageRepositary;
import jakarta.persistence.Entity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MarriageService {
   @Autowired
    private MarriageRepositary marriageRepositary;
   public MarriageCertificateRequest addMarriageForm(MarriageCertificateRequest marriageCertificateRequest){
      return  marriageRepositary.save(marriageCertificateRequest);
   }



   public List<MarriageCertificateRequest> getAllMarriage (){
       return marriageRepositary.findAll();
   }
}
