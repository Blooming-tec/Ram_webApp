package com.example.ram_info_app.controller;

import com.example.ram_info_app.entity.Ram;
import com.example.ram_info_app.entity.RamType;
import com.example.ram_info_app.repository.RamRepository;
import com.example.ram_info_app.repository.RamTypeRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class RamController {

    private final RamRepository ramRepo;
    private final RamTypeRepository typeRepo;

    // Constructor injection
    public RamController(RamRepository ramRepo, RamTypeRepository typeRepo) {
        this.ramRepo = ramRepo;
        this.typeRepo = typeRepo;
    }

    @GetMapping("/rams")
    public List<Ram> getAllRams() {
        return ramRepo.findAll();
    }

    @GetMapping("/ram-types")
    public List<RamType> getAllRamTypes() {
        return typeRepo.findAll();
    }
    @GetMapping("/rams/{id}")
    public Ram getRamById(@PathVariable Long id) {
        return ramRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("RAM with ID " + id + " not found"));
    }

    @PutMapping("/rams/{id}")
    public Ram updateRam(@PathVariable Long id, @RequestBody Ram updatedRam) {
        Ram existingRam = ramRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("RAM with ID " + id + " not found"));

        RamType type = typeRepo.findById(updatedRam.getType().getId())
                .orElseThrow(() -> new RuntimeException("RAM type not found"));

        existingRam.setBrand(updatedRam.getBrand());
        existingRam.setModel(updatedRam.getModel());
        existingRam.setClockSpeed(updatedRam.getClockSpeed());
        existingRam.setSize(updatedRam.getSize());
        existingRam.setCasLatency(updatedRam.getCasLatency());
        existingRam.setEcc(updatedRam.getEcc());
        existingRam.setPrice(updatedRam.getPrice());
        existingRam.setType(type);

        return ramRepo.save(existingRam);
    }


}