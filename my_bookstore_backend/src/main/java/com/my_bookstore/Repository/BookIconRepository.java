package com.my_bookstore.Repository;

import com.my_bookstore.Entity.BookIcon;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface BookIconRepository extends MongoRepository<BookIcon, Integer> {
}
