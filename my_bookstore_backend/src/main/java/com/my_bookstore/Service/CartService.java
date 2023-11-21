package com.my_bookstore.Service;

import com.my_bookstore.Entity.Book;
import com.my_bookstore.Entity.Cart;

import java.util.List;

public interface CartService {

    List<Cart> GetCart(Integer id);

    void DeleteCart(Integer id);

    Cart setCart(Integer purchasenum, Integer bookid, Integer userauthid);
}
