package com.example;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Arrays;
import java.util.List;

@Service
@RequestMapping("/api")
public class DrugsService {
    @RequestMapping(path = "/drugs", method = RequestMethod.GET)
    public @ResponseBody List<Drug> getDrugs() {
        return Arrays.asList(new Drug(12L, "Cocaine"), new Drug(13L, "Meth"));
    }
}
