package com.example.ram_info_app.repository;

import com.example.ram_info_app.entity.RamType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RamTypeRepository extends JpaRepository<RamType, Long> {
}
