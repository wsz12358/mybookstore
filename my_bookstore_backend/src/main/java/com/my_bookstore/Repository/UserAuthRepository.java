package com.my_bookstore.Repository;


import com.my_bookstore.Entity.UserAuth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserAuthRepository extends JpaRepository<UserAuth, Integer> {
    @Query(value = "select * from UserAuth where username = :username and password = :password", nativeQuery = true)
    UserAuth findUserAuthByPasswordAndUsername(@Param("username")String username, @Param("password")String password);

    @Modifying
    @Query("update UserAuth set ability = 1 - ability where userId = :id")
    Integer UpdateUserAuth(@Param("id")Integer id);

    @Query("from UserAuth where userId = :id")
    UserAuth findUserAuthByUserId(@Param("id") Integer id);

    @Query("from UserAuth where username = :username")
    UserAuth findUserAuthByUsername(@Param("username")String username);
}
