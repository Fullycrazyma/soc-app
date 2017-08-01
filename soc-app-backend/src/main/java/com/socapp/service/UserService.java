package com.socapp.service;

import com.socapp.model.User;
import com.socapp.model.UserRole;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class UserService implements BaseService<User> {

    private List<User> userList = new ArrayList<>();

    @PostConstruct
    void initUserList() {
        User user = new User();
        user.setId(UUID.randomUUID().toString());
        user.setUsername("username");
        user.setPassword("Test1234");
        user.setEmail("test@test.ru");
        user.setFirstName("firstname");
        user.setLastName("lastname");
        user.setUserRole(UserRole.USER);

        userList.add(user);
    }

    @Override
    public User save(User user) {
        user.setId(UUID.randomUUID().toString());
        userList.add(user);
        return user;
    }

    public List<User> getAll() {
        return userList;
    }

    @Override
    public List<User> find(String username) {
        return userList.stream().filter(user -> user.getUsername().equals(username)).collect(Collectors.toList());
    }

    @Override
    public User findOne(String id) {
        return userList.stream().filter(user -> user.getId().equals(id)).findFirst().get();
    }

    @Override
    public void remove(String id) {
        userList.removeIf(u -> u.getId().equals(id));
    }
}
