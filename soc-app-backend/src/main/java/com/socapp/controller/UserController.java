package com.socapp.controller;

import com.socapp.model.User;
import com.socapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(path = "/users")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(path = "/", method = RequestMethod.POST)
    public User createUser(@Valid @RequestBody User user) {
        return userService.save(user);
    }

    @RequestMapping(path = "/", method = RequestMethod.GET)
    public List<User> getUsers() {
        return userService.getAll();
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.GET)
    public User getUser(@PathVariable String id) {
        return userService.findOne(id);
    }

    @RequestMapping(path = "/", method = RequestMethod.PUT)
    public User updateUser(@Valid @RequestBody User user) {
        return userService.save(user);
    }


    @RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
    public void deleteUser(@PathVariable String id) {
        userService.remove(id);
    }
}
