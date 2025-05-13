package com.example.ram_info_app.repository;

import com.example.ram_info_app.entity.Ram;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RamRepository extends JpaRepository<Ram, Long> {
}