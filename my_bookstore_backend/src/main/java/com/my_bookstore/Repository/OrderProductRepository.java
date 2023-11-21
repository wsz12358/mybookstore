package com.my_bookstore.Repository;

import com.my_bookstore.Entity.Order;
import com.my_bookstore.Entity.OrderProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrderProductRepository extends JpaRepository<OrderProduct,Integer> {

    @Query("select b from OrderProduct b")
    List<OrderProduct> getOrderProducts();

    @Modifying
    @Query("delete from OrderProduct where OrderproductId = :id")
    void deleteOrderProducts(@Param("id") Integer id);
//    @Query("from OrderProduct where order = :id")
//    List<OrderProduct> getOrderProductById(@Param("id")Integer id);
}
