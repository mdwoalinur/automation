package com.trademaster.ims.controller;

import com.trademaster.ims.model.Product;
import com.trademaster.ims.repository.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {
	

	   @RequestMapping(value = "/create", method = RequestMethod.POST)
	    public void create() {
	    	System.out.println("hit");
	    	

	   }

   
}