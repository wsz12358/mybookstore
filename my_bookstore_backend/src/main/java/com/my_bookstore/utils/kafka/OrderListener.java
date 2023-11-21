package com.my_bookstore.utils.kafka;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.my_bookstore.Constant.KafkaConstant;
import com.my_bookstore.Entity.KafkaOrderInfo;
import com.my_bookstore.Entity.Order;
import com.my_bookstore.Service.OrderService;
import com.my_bookstore.Socket.WebSocketServer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * @author 小工匠
 * @version 1.0
 * @description: TODO
 * @date 2021/2/17 22:33
 * @mark: show me the code , change the world
 */

@Component
public class OrderListener {

    @Autowired
    OrderService orderService;

    @Autowired
    WebSocketServer webSocketServer;

    private Logger logger = LoggerFactory.getLogger(getClass());

    @KafkaListener(topics = KafkaConstant.KAFKAORDER, groupId = "orderGroup")
    public void onMessage(String kafkaOrderInfo){
        JSONObject kafkaOrderInfo1 = (JSONObject) JSON.parse(kafkaOrderInfo);
        System.out.println(kafkaOrderInfo1);
        String ordertime = kafkaOrderInfo1.get("ordertime").toString();
        String orderstate = kafkaOrderInfo1.get("orderstate").toString();
        Integer id = Integer.valueOf(kafkaOrderInfo1.get("id").toString());
        orderService.addOrder(ordertime, orderstate, id);
        webSocketServer.sendMessageToUser(String.valueOf(id), "成功下订单！");
    }

}