package com.example.demo.service;
import com.example.demo.modal.DeathCertificateRequest;
import com.example.demo.repo.DeathRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DeathService {

@Autowired
    private DeathRepository deathRepository;

public DeathCertificateRequest addDeathForm (DeathCertificateRequest deathCertificateRequest){
    return deathRepository.save(deathCertificateRequest);
}



}
