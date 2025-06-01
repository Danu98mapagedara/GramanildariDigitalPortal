package com.example.demo.service;


import com.example.demo.modal.NewsModal;
import com.example.demo.repo.NewsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewsService {

    @Autowired
     private NewsRepo newsRepo;

    public NewsModal addNews (NewsModal newsModal){
        return  newsRepo.save(newsModal);
    }


    public List<NewsModal> getAllNews(){
        return  newsRepo.findAll();
    }
}
