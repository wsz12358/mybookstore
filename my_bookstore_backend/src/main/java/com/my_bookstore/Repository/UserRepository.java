package com.my_bookstore.Repository;

import com.my_bookstore.Entity.User;
import com.my_bookstore.Entity.UserAuth;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository  extends JpaRepository<User, Integer> {
}
