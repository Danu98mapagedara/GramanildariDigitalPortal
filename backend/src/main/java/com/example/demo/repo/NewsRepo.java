package com.example.demo.repo;

import com.example.demo.modal.NewsModal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface NewsRepo extends JpaRepository<NewsModal,Long> {
}
