package com.my_bookstore.Entity;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "cart")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "CartId")
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cart_id")
    private Integer CartId;
    private Integer purchasenum;

    @ManyToOne
    @JoinColumn(name = "book")
    private Book book;

    @OneToOne
    @JoinColumn(name = "user")
    UserAuth userAuth;

    public Integer getCartId()
    {
        return CartId;
    }

    public Integer getPurchasenum()
    {
        return purchasenum;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public Book getBook() {
        return book;
    }

    public void setUserAuth(UserAuth userAuth) {
        this.userAuth = userAuth;
    }

    public UserAuth getUserAuth() {
        return userAuth;
    }
}
