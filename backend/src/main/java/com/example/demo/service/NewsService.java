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

    public NewsModal updateNews(Long id, NewsModal updatedNews) {
        NewsModal existingNews = newsRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("News not found with id " + id));

        // Update the fields
        existingNews.setTitle(updatedNews.getTitle());
        existingNews.setDescription(updatedNews.getDescription());


        return newsRepo.save(existingNews);
    }
}
