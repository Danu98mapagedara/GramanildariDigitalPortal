package com.example.demo.controller;


import com.example.demo.service.PdfFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("api/pdf")
@CrossOrigin(origins = "http://localhost:5173")
public class PdfFileController {

    private PdfFileService pdfFileService;
    @PostMapping("/upload")

    public ResponseEntity<String> uploadPdf(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body("No file uploaded");
        }
        // Save logic here
        return ResponseEntity.ok("Uploaded: " + file.getOriginalFilename());
    }
}
