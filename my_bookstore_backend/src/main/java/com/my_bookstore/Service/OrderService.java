package com.my_bookstore.Service;

import com.my_bookstore.Entity.Order;

import java.util.List;

public  interface OrderService {
    List<Order> getOrdersByUserAuth(Integer id);

    List<Order> getOrders();

    Order addOrder(String ordertime, String orderstate, Integer id);

    void DeleteOrder(Integer id);
}
