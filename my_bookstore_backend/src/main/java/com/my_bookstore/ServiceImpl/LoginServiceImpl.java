package com.my_bookstore.ServiceImpl;

import com.my_bookstore.Dao.UserAuthDao;
import com.my_bookstore.Entity.User;
import com.my_bookstore.Entity.UserAuth;
import com.my_bookstore.Service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;


@Transactional
@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    UserAuthDao userAuthDao;

    @Override
    public UserAuth checkUserAuth(String username, String password)
    {
        return userAuthDao.getUserAuth(username, password);
    }

    @Override
    public void UpdateUserAuth(Integer id)
    {
        userAuthDao.UpdateUserAbility(id);
    }

    @Override
    public UserAuth getUserAuthById(Integer id)
    {
        return userAuthDao.getUserAuthById(id);
    }

    @Override
    public List<UserAuth> getUsers()
    {
        return userAuthDao.getUsers();
    }

    @Override
    public UserAuth addUser(String username, String password, String email)
    {
        UserAuth userAuth = new UserAuth();
        userAuth.setUsername(username);
        userAuth.setPassword(password);
        userAuth.setUserType(0);
        userAuth.setAbility(1);
        userAuthDao.addUserAuth(userAuth);
        User user = new User();
        user.setEmail(email);
        user.setUserAuth(userAuth);
        userAuthDao.addUser(user);
        return userAuth;
    }

    @Override
    public UserAuth ifUserAuthExist(String username)
    {
        return userAuthDao.getUserAuthByName(username);
    }
}
