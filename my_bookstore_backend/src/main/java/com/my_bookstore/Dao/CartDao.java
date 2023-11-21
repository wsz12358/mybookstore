package com.my_bookstore.Dao;

import com.my_bookstore.Entity.Book;
import com.my_bookstore.Entity.Cart;
import com.my_bookstore.Entity.UserAuth;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

public interface CartDao {

    List<Cart> GetCarts();

    void SetCart(Cart cart);

    Cart GetCartByBookAndUserAuth(Book book, Integer id);

    Integer ChangeCart(Integer purchasenum, Integer id);


    void DeleteByUserAuth(Integer id);

    Book getBook(Integer id);

    List<Cart> getCartsByUserAuth(Integer id);

    UserAuth getUserAuth(Integer id);
}
