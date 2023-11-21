package com.my_bookstore.Repository;

import com.my_bookstore.Entity.Book;
import com.my_bookstore.Entity.Cart;
import com.my_bookstore.Entity.OrderProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

public interface CartRepository extends JpaRepository<Cart, Integer> {

    @Query("from Cart where book = :id and userAuth.userId = :userauthid")
    Cart findCartByBook(@Param("id") Book id, @Param("userauthid") Integer userauthid);

    @Modifying
    @Query("update Cart set purchasenum = :purchasenum where CartId = :id")
    Integer findCartByBook2(@Param("purchasenum") Integer purchasenum, @Param("id") Integer id);

    @Modifying
    @Query(value = "delete from Cart where userAuth.userId = :id")
    void deleteCartsByUserAuth(@Param("id")Integer id);

    @Query("from Cart where userAuth.userId = :id")
    List<Cart> findCartsByUserAuth(@Param("id")Integer id);
}
