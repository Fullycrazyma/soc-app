package com.socapp.service;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface BaseService<T> {

    T save(T object);

    List<T> find(String name);

    T findOne(String id);

    void remove(String id);
}
