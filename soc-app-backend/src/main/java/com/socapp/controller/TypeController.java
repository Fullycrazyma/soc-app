package com.socapp.controller;

import com.socapp.model.Type;
import com.socapp.service.TypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/types")
public class TypeController {

    private TypeService typeService;

    @Autowired
    public TypeController(TypeService typeService) {
        this.typeService = typeService;
    }

    @RequestMapping(path = "/", method = RequestMethod.GET)
    public List<Type> getAllTypes() {
        return typeService.getTypes();
    }

    @RequestMapping(path = "/{type}", method = RequestMethod.GET)
    public String getTypeDescription(@PathVariable Type type) {
        return typeService.getTypeDescription(type);
    }
}
