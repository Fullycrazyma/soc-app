package com.socapp;

import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;

@SpringBootApplication
public class SocApplication {
    public static void main(String[] args) {
        SpringApplication.run(SocApplication.class, args);
    }

    @Configuration
    public static class MongoConfiguration extends AbstractMongoConfiguration {

        @Override
        protected String getDatabaseName() {
            return "Socapp";
        }

        @Override
        @Bean
        public Mongo mongo() throws Exception {
            return new MongoClient("localhost");
        }
    }
}
