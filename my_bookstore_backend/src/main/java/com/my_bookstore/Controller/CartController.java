package com.my_bookstore.Controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.my_bookstore.Constant.CartConstant;
import com.my_bookstore.Entity.Book;
import com.my_bookstore.Entity.Cart;
import com.my_bookstore.Service.BookService;
import com.my_bookstore.Service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.Map;

@RequestMapping("/cart")
@RestController
public class CartController {

    @Autowired
    CartService cartService;
    @Autowired
    BookService bookService;

    @RequestMapping("/get")
    public JSONArray GetCarts(@RequestBody Map<String, String> params) {
        String userauthid = params.get(CartConstant.USERAUTHID);
        JSONArray arr = JSONArray.parseArray(JSON.toJSONString(cartService.GetCart(Integer.valueOf(userauthid))));
        return arr;
    }

    @RequestMapping("/save")
    public JSONObject SetCart(@RequestBody Map<String, String> params) {
        String purchasenum = params.get(CartConstant.PURCHASE_NUM);
        String bookid = params.get(CartConstant.BOOKID);
        String userauthid = params.get(CartConstant.USERAUTHID);
        Cart cart = cartService.setCart(Integer.valueOf(purchasenum), Integer.valueOf(bookid), Integer.valueOf(userauthid));
        return (JSONObject) JSON.toJSON(cart);
    }

    @RequestMapping("/delete")
    public String DeleteCart(@RequestBody Map<String, String> params)
    {
        String id = params.get(CartConstant.USERAUTHID);
        cartService.DeleteCart(Integer.valueOf(id));
        return "success";
    }
}
