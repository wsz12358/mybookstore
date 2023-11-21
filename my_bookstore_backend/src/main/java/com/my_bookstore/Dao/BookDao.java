package com.my_bookstore.Dao;
import com.my_bookstore.Entity.Book;
import com.my_bookstore.Entity.BookType;

import java.util.List;

public interface BookDao {
    Book findOne(Integer id);

    List<Book> getBooks();

    void addBook(Book book);

    void deleteBook(Integer id);

    void UpdateBook(String name, String author, String image, String isbn, Integer inventory, Integer id);

    List<BookType> FindSimilarType(String type);

    List<Book> FindBookByType(String type);
}
