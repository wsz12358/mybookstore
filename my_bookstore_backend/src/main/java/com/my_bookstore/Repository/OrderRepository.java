package com.my_bookstore.Repository;

import com.my_bookstore.Entity.Order;
import com.my_bookstore.Entity.OrderProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Integer> {

    @Query("select b from Order b")
    List<Order> getOrders();

    @Modifying
    @Query("delete from Order where OrderId = :id")
    void deleteOrderById(@Param("id")Integer id);

    @Query("from Order where OrderId = :id")
    Order getOrder(@Param("id")Integer id);

    @Query(value = "select * from orders_ where user = :id", nativeQuery = true)
    List<Order> getOrdersByUser(@Param("id")Integer id);
}
