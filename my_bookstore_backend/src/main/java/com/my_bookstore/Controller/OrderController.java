package com.my_bookstore.Controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.my_bookstore.Constant.KafkaConstant;
import com.my_bookstore.Constant.OrderConstant;
import com.my_bookstore.Entity.Cart;
import com.my_bookstore.Entity.KafkaOrderInfo;
import com.my_bookstore.Entity.Order;
import com.my_bookstore.Entity.OrderProduct;
import com.my_bookstore.Service.CartService;
import com.my_bookstore.Service.OrderProductService;
import com.my_bookstore.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RequestMapping("/order")
@RestController
public class OrderController {

    @Autowired
    KafkaTemplate<Object, Object> kafkaTemplate;

    @Autowired
    OrderService orderService;

    @RequestMapping("/get")
    public JSONArray GetOrders() {
        return JSONArray.parseArray(JSON.toJSONString(orderService.getOrders()));
    }


    @RequestMapping("/add")
    public String AddOrder(@RequestBody Map<String, String> params) {
        String ordertime = params.get(OrderConstant.ORDERTIME);
        String orderstate = params.get(OrderConstant.ORDERSTATE);
        String id = params.get(OrderConstant.USERAUTHID);
        KafkaOrderInfo kafkaOrderInfo = new KafkaOrderInfo(ordertime, orderstate, Integer.valueOf(id));
        kafkaTemplate.send(KafkaConstant.KAFKAORDER, kafkaOrderInfo);
        return "success";
    }

    @RequestMapping("/delete")
    public void DeleteOrder(@RequestBody Map<String, String> params)
    {
        String id = params.get(OrderConstant.ORDERID);
        orderService.DeleteOrder(Integer.valueOf(id));
    }

    @RequestMapping("/getbyuser")
    public JSONArray GetOrdersByUserAuth(@RequestBody Map<String, String> params)
    {
        String id = params.get(OrderConstant.USERAUTHID);
        return JSONArray.parseArray(JSON.toJSONString(orderService.getOrdersByUserAuth(Integer.valueOf(id))));
    }
}
