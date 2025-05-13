package com.example.ram_info_app.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "ram_modules")
public class Ram {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String brand;

    @Column(nullable = false)
    private String model;

    @ManyToOne
    @JoinColumn(name = "type_id", nullable = false)
    private RamType type;

    @Column(name = "clock_speed_mhz", nullable = false)
    private Integer clockSpeed;

    @Column(name = "size_gb", nullable = false)
    private Integer size;

    @Column(name = "cas_latency", nullable = false)
    private Integer casLatency;

    @Column(nullable = false)
    private Boolean ecc;

    @Column(name = "price_eur", nullable = false)
    private Double price;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public RamType getType() {
        return type;
    }

    public void setType(RamType type) {
        this.type = type;
    }

    public Integer getClockSpeed() {
        return clockSpeed;
    }

    public void setClockSpeed(Integer clockSpeed) {
        this.clockSpeed = clockSpeed;
    }

    public Integer getSize() {
        return size;
    }

    public void setSize(Integer size) {
        this.size = size;
    }

    public Integer getCasLatency() {
        return casLatency;
    }

    public void setCasLatency(Integer casLatency) {
        this.casLatency = casLatency;
    }

    public Boolean getEcc() {
        return ecc;
    }

    public void setEcc(Boolean ecc) {
        this.ecc = ecc;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}