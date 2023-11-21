package com.my_bookstore.Service;

import com.my_bookstore.Entity.Book;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;


public interface BookService {

    String getAuthorByName(String name);

    List<Book> getBooks();
}
