package com.example.demo.repo;

import com.example.demo.modal.DeathCertificateRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface DeathRepository  extends JpaRepository<DeathCertificateRequest,Long> {
}
