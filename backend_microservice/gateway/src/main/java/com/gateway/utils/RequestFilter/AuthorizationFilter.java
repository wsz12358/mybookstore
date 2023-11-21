//package com.gateway.utils.RequestFilter;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.cloud.gateway.filter.GatewayFilterChain;
//import org.springframework.cloud.gateway.filter.GlobalFilter;
//import org.springframework.core.Ordered;
//import org.springframework.http.server.reactive.ServerHttpRequest;
//import org.springframework.http.server.reactive.ServerHttpResponse;
//import org.springframework.stereotype.Component;
//import org.springframework.web.server.ServerWebExchange;
//import reactor.core.publisher.Mono;
//
//import javax.servlet.http.HttpServletRequest;
//import java.util.Objects;
//
//@Component
//public class AuthorizationFilter implements GlobalFilter, Ordered
//{
//    @Override
//    public int getOrder() {
//        return 1;
//    }
//
//    @Override
//    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
//
//        ServerHttpRequest serverHttpRequest = exchange.getRequest();
//        ServerHttpResponse serverHttpResponse = exchange.getResponse();
//
//        String path = String.valueOf(serverHttpRequest.getPath());
//        return chain.filter(exchange);
//    }
//}
