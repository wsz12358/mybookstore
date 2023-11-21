package com.my_bookstore.Entity;

import com.alibaba.fastjson.annotation.JSONField;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;


import javax.persistence.*;

@Data
@Entity
@Table(name = "orderproduct")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler", "ordering"})
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "OrderproductId")
public class OrderProduct {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer OrderproductId;
    private Integer purchasenum;

    @JSONField(serialize = false)
    @ManyToOne
    @JoinColumn(name = "orderin")
    private Order ordering;
    @ManyToOne
    @JoinColumn(name = "book")
    private Book book;

    public Integer getOrderproductId()
    {
        return OrderproductId;
    }

    public void setOrderproductId(Integer OrderproductId)
    {
        this.OrderproductId = OrderproductId;
    }


    public Integer getPurchaseNum()
    {
        return purchasenum;
    }

    public void setPurchaseNum(Integer purchasenum)
    {
        this.purchasenum = purchasenum;
    }

    public void setOrdering(Order order) {this.ordering = order;}

    public Order getOrdering(){return ordering;}

}
