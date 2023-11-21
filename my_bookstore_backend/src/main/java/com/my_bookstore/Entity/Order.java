package com.my_bookstore.Entity;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;

import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;
@Data
@Entity
@Table(name = "orders_")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "OrderId")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer OrderId;
    private Double total_price;
    private String ordertime;
    private String orderstate;

    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "orderin")
    private List<OrderProduct> orderProducts;

    @OneToOne
    @JoinColumn(name = "user")
    UserAuth userAuth;

    public Integer getOrderId()
    {
        return OrderId;
    }

    public Double getTotal_price()
    {
        return total_price;
    }

    public String getOrdertime()
    {
        return ordertime;
    }

    public String getOrderstate()
    {
        return orderstate;
    }

    public void setOrderProducts(List<OrderProduct> ops)
    {
        orderProducts = ops;
    }

    public void setTotal_price(Double total_price)
    {
        this.total_price = total_price;
    }

    public void setOrderId(Integer orrderid)
    {
        this.OrderId = orrderid;
    }

    public void setOrdertime(String ordertime)
    {
        this.ordertime = ordertime;
    }

    public void setOrderstate(String orderstate)
    {
        this.orderstate = orderstate;
    }

    public UserAuth getUserAuth() {
        return userAuth;
    }

    public void setUserAuth(UserAuth userAuth) {
        this.userAuth = userAuth;
    }
}
