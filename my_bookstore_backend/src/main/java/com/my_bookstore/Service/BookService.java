package com.my_bookstore.Service;

import com.my_bookstore.Entity.Book;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;


public interface BookService {

    Book findBookById(Integer id);

    List<Book> getBooks();

    void addBook(Book book);

    void deleteBook(Integer id);

    void UpdateBook(String name, String author, String image, String isbn, Integer inventory, Integer id);

    List<Book> FindSimilarBooks(String type);
}
