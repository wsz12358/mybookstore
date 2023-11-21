package com.my_bookstore.Dao;

import com.my_bookstore.Entity.User;
import com.my_bookstore.Entity.UserAuth;

import java.util.List;

public interface UserAuthDao {
    UserAuth getUserAuth(String username, String password);

    void UpdateUserAbility(Integer id);

    UserAuth getUserAuthById(Integer id);

    List<UserAuth> getUsers();

    void addUserAuth(UserAuth userAuth);

    void addUser(User user);

    UserAuth getUserAuthByName(String username);
}
