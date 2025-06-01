package com.example.demo.service;
import com.example.demo.modal.DeathCertificateRequest;
import com.example.demo.modal.MarriageCertificateRequest;
import com.example.demo.repo.DeathRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

@Service
public class DeathService {

@Autowired
    private DeathRepository deathRepository;

public DeathCertificateRequest addDeathForm (String fullNameOfDeceased,
                                             LocalDate dateOfDeath,
                                             String placeOfDeath,
                                             String causeOfDeath,
                                             String addressOfDeceased,
                                             String requesterName,
                                             String requesterNIC,
                                             String requesterRelationship,
                                             String requesterContact,
                                             String requesterEmail,
                                             MultipartFile identityImage) throws IOException {

    DeathCertificateRequest request = new DeathCertificateRequest();

    request.setFullNameOfDeceased(fullNameOfDeceased);
    request.setDateOfDeath(dateOfDeath);
    request.setPlaceOfDeath(placeOfDeath);
    request.setCauseOfDeath(causeOfDeath);
    request.setAddressOfDeceased(addressOfDeceased);
    request.setRequesterName(requesterName);
    request.setRequesterNIC(requesterNIC);
    request.setRequesterRelationship(requesterRelationship);
    request.setRequesterContact(requesterContact);
    request.setRequesterEmail(requesterEmail);

    // Identity Image
    request.setIdentityCardImage(identityImage.getBytes());
    request.setImageFileName(identityImage.getOriginalFilename());
    request.setImageContentType(identityImage.getContentType());

    return deathRepository.save(request);
}

    public List<DeathCertificateRequest> getAllDeath (){
        return deathRepository.findAll();
    }

}
