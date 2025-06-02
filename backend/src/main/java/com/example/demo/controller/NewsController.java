package com.example.demo.controller;


import com.example.demo.modal.NewsModal;
import com.example.demo.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/news")
public class NewsController {
    @Autowired
    private NewsService newsService;
    @PostMapping
    public NewsModal uploadNews ( @RequestBody NewsModal newsModal){

        return  newsService.addNews(newsModal);
    }

    @GetMapping
    public List<NewsModal> getAllNews(){
        return  newsService.getAllNews();
    }


    @PutMapping("/{id}")
    public ResponseEntity<NewsModal> updateNews(@PathVariable Long id, @RequestBody NewsModal updatedNews) {
        NewsModal news = newsService.updateNews(id, updatedNews);
        return ResponseEntity.ok(news);
    }
}
