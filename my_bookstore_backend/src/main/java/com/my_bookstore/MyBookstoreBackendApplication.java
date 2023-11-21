package com.my_bookstore;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.boot.ApplicationRunner;
import  org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.config.TopicBuilder;
import org.springframework.kafka.core.KafkaTemplate;

@SpringBootApplication
@EnableKafka
public class MyBookstoreBackendApplication {
	public static void main(String[] args) {
		SpringApplication.run(MyBookstoreBackendApplication.class, args);
	}
	@Bean
	public NewTopic topic() {
		return TopicBuilder.name("KAFKAORDER")
				.partitions(10)
				.replicas(1)
				.build();
	}

}
