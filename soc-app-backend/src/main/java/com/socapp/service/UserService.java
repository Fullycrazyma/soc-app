package com.socapp.service;

import com.socapp.model.User;
import com.socapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class UserService {

    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> save(List<User> users) {
        users.forEach(user -> user.setId(UUID.randomUUID().toString()));
        return userRepository.save(users);
    }

    public User save(User user) {
        user.setId(UUID.randomUUID().toString());
        return userRepository.save(user);
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public List<User> findAll(Pageable pageable) {
        return userRepository.findAll(pageable).getContent();
    }

    public User findById(String id) {
        return userRepository.findOne(id);
    }

    public void deleteAll() {
        userRepository.deleteAll();
    }

    public void delete(String id) {
        userRepository.delete(id);
    }
}
