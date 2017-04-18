package com.example;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@Service
@RequestMapping("/api")
public class ProductsService {
    @RequestMapping(path = "/products", method = RequestMethod.GET)
    public @ResponseBody List<Product> getProducts(@RequestParam("sourceName") String sourceName) {
        if ("Orange Book".equals(sourceName)) {
            return Arrays.asList(new Product(12L, "Cocaine"), new Product(13L, "Meth"));
        } else {
            return Arrays.asList(new Product(33L, "Panadol"), new Product(44L, "Acyclovir"));
        }
    }

    @RequestMapping(path = "/sources", method = RequestMethod.GET)
    public @ResponseBody List<Source> getSources() {
        return Arrays.asList(new Source("0", "COS Processing"), new Source("1", "Orange Book"));
    }
}
