//package com.gateway.utils.ResponseFilter;
//
//import com.netflix.ribbon.proxy.annotation.Http;
//import org.springframework.cloud.gateway.filter.GatewayFilterChain;
//import org.springframework.cloud.gateway.filter.GlobalFilter;
//import org.springframework.core.Ordered;
//import org.springframework.core.io.buffer.DataBufferFactory;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.MediaType;
//import org.springframework.http.server.reactive.ServerHttpResponse;
//import org.springframework.http.server.reactive.ServerHttpResponseDecorator;
//import org.springframework.stereotype.Component;
//import org.springframework.web.server.ServerWebExchange;
//import reactor.core.publisher.Flux;
//import reactor.core.publisher.Mono;
//
//import java.nio.charset.StandardCharsets;
//import java.time.LocalDateTime;
//import java.util.HashMap;
//import java.util.Map;
//
//@Component
//public class ResponseFilter implements GlobalFilter, Ordered {
//
//
//    @Override
//    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain)
//    {
//        return chain.filter(exchange).then(Mono.fromRunnable(()->{
//            ServerHttpResponse response = exchange.getResponse();
//            HttpStatus status = response.getStatusCode();
////            response.getHeaders().setContentType(MediaType.APPLICATION_JSON);
//            response.setStatusCode(HttpStatus.OK);
//
//            if (status.isError())
//            {
//                ErrorResponse errorResponse = new ErrorResponse(
//                        status.value(),
//                        "Operation failed",
//                        LocalDateTime.now(),
//                        null
//                );
//
//                byte[] responseBytes = errorResponse.toString().getBytes(StandardCharsets.UTF_8);
//
//                response.writeWith(Mono.just(response.bufferFactory().allocateBuffer().write(responseBytes)));
//            }
//            else
//            {
//                String originalBody = exchange.getAttributeOrDefault("originalResponseBody", "");
//                String wrappedBody = createWrappedResponseBody(originalBody);
//                byte[] responseBytes = wrappedBody.toString().getBytes(StandardCharsets.UTF_8);
//
//                response.writeWith(Mono.just(response.bufferFactory().allocateBuffer().write(responseBytes)));
//            }
//
//        }));
//    }
//
//    private String createWrappedResponseBody(String originalBody)
//    {
//        LocalDateTime time = LocalDateTime.now();
//        String rtcode = "{\"status\": 200, \"msg\": \"OK\", \"data\": " + originalBody + ", \"timestamp\": \"" + time + "\"}";
//        System.out.println(rtcode);
//        return rtcode;
//    }
//
//    @Override
//    public int getOrder(){
//        return Ordered.HIGHEST_PRECEDENCE;
//    }
//    static class ErrorResponse{
//        private int status;
//        private String msg;
//        private LocalDateTime timestamp;
//        private Map<String, Object> data;
//
//        public ErrorResponse(int status, String msg, LocalDateTime timestamp, Map<String, Object> data)
//        {
//            this.status = status;
//            this.msg = msg;
//            this.timestamp = timestamp;
//            this.data = data;
//        }
//
//        public String toString()
//        {
//            Map<String, Object> responseMap = new HashMap<>();
//            responseMap.put("status", status);
//            responseMap.put("msg", msg);
//            responseMap.put("timestamp", timestamp);
//            responseMap.put("data", data);
//            return responseMap.toString();
//        }
//    }
//}
