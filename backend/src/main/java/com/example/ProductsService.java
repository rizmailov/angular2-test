package com.example;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Arrays;
import java.util.List;

@Service
@RequestMapping("/api")
public class ProductsService {
    @RequestMapping(path = "/products", method = RequestMethod.GET)
    public @ResponseBody List<Product> getProducts() {
        return Arrays.asList(new Product(12L, "Cocaine"), new Product(13L, "Meth"));
    }

    @RequestMapping(path = "/sources", method = RequestMethod.GET)
    public @ResponseBody List<Source> getSources() {
        return Arrays.asList(new Source("0", "COS Processing"), new Source("1", "Orange Book"));
    }
}
