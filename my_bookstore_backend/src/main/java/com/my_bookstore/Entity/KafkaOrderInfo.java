package com.my_bookstore.Entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;


public class KafkaOrderInfo {
    String ordertime;
    String orderstate;
    Integer id;

    public KafkaOrderInfo(String ordertime, String orderstate, Integer id) {
        this.ordertime = ordertime;
        this.orderstate = orderstate;
        this.id = id;
    }

    @Override
    public String toString() {
        return "KafkaOrderInfo [" +
                "id=" + id +
                ", orderstate='" + orderstate +
                "', ordertime='" + ordertime +
                ']';
    }

    public String getOrdertime() {
        return ordertime;
    }

    public String getOrderstate() {
        return orderstate;
    }

    public Integer getId() {
        return id;
    }

    public void setOrdertime(String ordertime) {
        this.ordertime = ordertime;
    }

    public void setOrderstate(String orderstate) {
        this.orderstate = orderstate;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
