package com.my_bookstore.Socket;


import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.my_bookstore.Entity.Order;
import com.my_bookstore.Service.OrderService;
import lombok.NonNull;
import net.sf.json.JSONString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;
import javax.websocket.*;
import javax.websocket.server.*;

@ServerEndpoint(value = "/ws/transfer/{userId}")
@Component
public class WebSocketServer {

    public WebSocketServer() {
        //每当有一个连接，都会执行一次构造方法
        System.out.println("新的连接");
    }

    private static OrderService orderService;

    @Autowired
    public void setOrderService(@NonNull OrderService orderService)
    {
        WebSocketServer.orderService = orderService;
    }

    private static final AtomicInteger COUNT = new AtomicInteger();

    private static final ConcurrentHashMap<String, Session> SESSIONS = new ConcurrentHashMap<>();

    public void sendMessage(Session toSession, String message) {
        if (toSession != null) {
            try {
                toSession.getBasicRemote().sendText(message);
            } catch (IOException e) {
                e.printStackTrace();
            }
        } else {
            System.out.println("对方不在线");
        }
    }

    public void sendMessageToUser(String user, String message) {
        Session toSession = SESSIONS.get(user);
        synchronized (SESSIONS)
        {
            sendMessage(toSession, message);
        }
    }


    @OnMessage
    public void onMessage(String message) {
        System.out.println("服务器收到消息：" + message);
    }

    @OnOpen
    public void onOpen(Session session, @PathParam("userId") String userId) throws JsonProcessingException {
        synchronized (this) {
            if (SESSIONS.get(userId) != null) {
                System.out.println("已经上线过了");
                return;
            }
            SESSIONS.put(userId.trim(), session);
            COUNT.incrementAndGet();
            System.out.println(userId + "上线了");
        }
    }

    @OnClose
    public void onClose(@PathParam("userId") String userId) {
        SESSIONS.remove(userId);
        COUNT.decrementAndGet();
        System.out.println(userId + "下线了");
    }

    @OnError
    public void onError(Session session, Throwable throwable) {
        System.out.println("发生错误");
        throwable.printStackTrace();
    }
}


