package com.trademaster.ims.controller;

import com.trademaster.ims.model.Product;
import com.trademaster.ims.repository.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products") // better practice
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

    @Autowired
    private ProductRepository repo;

    // ✅ Save Data (Angular → Spring)
    @PostMapping
    public Product saveProduct(@RequestBody Product product) {
        return repo.save(product);
    }

    // ✅ Get All Data
    @GetMapping
    public List<Product> getAll() {
        return repo.findAll();
    }
}