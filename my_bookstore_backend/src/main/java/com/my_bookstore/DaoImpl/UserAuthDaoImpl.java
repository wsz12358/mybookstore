package com.my_bookstore.DaoImpl;

import com.my_bookstore.Dao.UserAuthDao;
import com.my_bookstore.Entity.User;
import com.my_bookstore.Entity.UserAuth;
import com.my_bookstore.Repository.UserAuthRepository;
import com.my_bookstore.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserAuthDaoImpl implements UserAuthDao {
    @Autowired
    UserAuthRepository userAuthRepository;

    @Autowired
    UserRepository userRepository;

    @Override
    public UserAuth getUserAuth(String username, String password)
    {
        return userAuthRepository.findUserAuthByPasswordAndUsername(username, password);
    }

    @Override
    public void UpdateUserAbility(Integer id)
    {
        userAuthRepository.UpdateUserAuth(id);
    }

    @Override
    public UserAuth getUserAuthById(Integer id)
    {
        return userAuthRepository.findUserAuthByUserId(id);
    }

    @Override
    public List<UserAuth> getUsers()
    {
        return userAuthRepository.findAll();
    }

    @Override
    public void addUserAuth(UserAuth userAuth) {userAuthRepository.save(userAuth);}

    @Override
    public void addUser(User user) {userRepository.save(user);}

    @Override
    public UserAuth getUserAuthByName(String username) {return userAuthRepository.findUserAuthByUsername(username);}

}
