package com.example.demo.repo;


import com.example.demo.modal.MarriageCertificateRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MarriageRepositary  extends JpaRepository<MarriageCertificateRequest,Long> {
}
