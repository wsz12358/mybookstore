package com.my_bookstore.Dao;

import com.my_bookstore.Entity.Cart;
import com.my_bookstore.Entity.Order;
import com.my_bookstore.Entity.OrderProduct;
import com.my_bookstore.Entity.UserAuth;

import java.util.List;

public interface OrderDao {

    List<Order> getOrders();

    List<Cart> GetCarts();

    void setOrderProduct(OrderProduct op);

    void setOrder(Order order);

    void DeleteCartByUserAuth(Integer id);

    void DeleteOrderproduct(Integer id);

    void DeleteOrder(Integer id);

    Order GetOrder(Integer id);

    UserAuth GetUserAuth(Integer id);

    List<Cart> getCartsByUserAuth(Integer id);

    List<Order> getOrdersByUserAuth(Integer id);

    void UpdateInventory(Integer num, Integer id);
}
