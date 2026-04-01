package com.trademaster.ims.controller;

import com.trademaster.ims.model.Product;
import com.trademaster.ims.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:4200") // Adjust if Angular runs on a different port
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    // Create or update a product
    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        Product savedProduct = productRepository.save(product);
        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
    }

    // Get all products
    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // Get a product by ID
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Optional<Product> product = productRepository.findById(id);
        return product.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Update an existing product
    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product productDetails) {
        Optional<Product> existingProduct = productRepository.findById(id);
        if (existingProduct.isPresent()) {
            Product product = existingProduct.get();
            // Update fields (adjust according to your Product entity)
            product.setProductCode(productDetails.getProductCode());
            product.setSku(productDetails.getSku());
            product.setProductName(productDetails.getProductName());
            product.setDescription(productDetails.getDescription());
            product.setBaseUnitId(productDetails.getBaseUnitId());
            product.setBuyingPrice(productDetails.getBuyingPrice());
            product.setSellingPrice(productDetails.getSellingPrice());
            product.setTaxRate(productDetails.getTaxRate());
            product.setMinStockLevel(productDetails.getMinStockLevel());
            product.setMaxStockLevel(productDetails.getMaxStockLevel());
            product.setReorderLevel(productDetails.getReorderLevel());
            product.setStatus(productDetails.getStatus());
            // createdAt is not updated; updatedAt will be handled by @LastModifiedDate
            Product updated = productRepository.save(product);
            return ResponseEntity.ok(updated);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete a product
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        if (productRepository.existsById(id)) {
            productRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}