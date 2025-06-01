package com.example.demo.service;


import com.example.demo.modal.PdfFile;
import com.example.demo.repo.PdfFileRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service

public class PdfFileService {
    private PdfFileRepository pdfFileRepository;


    public PdfFile saveFile(MultipartFile file) throws IOException{
        String fileName = file.getOriginalFilename();
        String contentType = file.getContentType();
        byte[] data = file.getBytes();

        PdfFile pdf = new PdfFile(fileName, contentType, data);
        return pdfFileRepository.save(pdf);
    }
}
