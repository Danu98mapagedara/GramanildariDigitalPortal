package com.example.demo.repo;


import com.example.demo.modal.PdfFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface PdfFileRepository extends JpaRepository<PdfFile,Long> {
}
