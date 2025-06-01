package com.example.demo.controller;


import com.example.demo.modal.NewsModal;
import com.example.demo.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/news")
public class NewsController {
    @Autowired
    private NewsService newsService;
    @PostMapping

    public NewsModal addNews ( @RequestBody NewsModal newsModal){
        return  newsService.addNews(newsModal);
    }

    @GetMapping
    public List<NewsModal> getAllNews(){
        return  newsService.getAllNews();
    }


}
