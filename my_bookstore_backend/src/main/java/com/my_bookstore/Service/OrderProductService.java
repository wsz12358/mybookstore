package com.my_bookstore.Service;

import com.my_bookstore.Entity.OrderProduct;

import java.util.List;

public interface OrderProductService {

    List<OrderProduct> getOrderProducts();

    void setOrderProduct(OrderProduct op);

//    List<OrderProduct> getOrderProduct(Integer id);
}
