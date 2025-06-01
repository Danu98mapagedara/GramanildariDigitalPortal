package com.example.demo.repo;

import com.example.demo.modal.BirthRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository

public interface BirthRepository  extends JpaRepository<BirthRequest,Long> {
}
