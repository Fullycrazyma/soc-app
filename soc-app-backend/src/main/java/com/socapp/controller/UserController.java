package com.socapp.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @RequestMapping(path = "/hello", method = RequestMethod.GET)
    public String hello() {
        return "Hello";
    }
}
