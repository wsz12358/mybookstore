package com.my_bookstore.Service;

import com.my_bookstore.Entity.UserAuth;

import java.util.List;

public interface LoginService {

    UserAuth checkUserAuth(String username, String password);

    void UpdateUserAuth(Integer id);

    UserAuth getUserAuthById(Integer id);

    List<UserAuth> getUsers();

    UserAuth addUser(String username, String password, String email);

    UserAuth ifUserAuthExist(String username);
}
