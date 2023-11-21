package com.my_bookstore.Repository;

import com.my_bookstore.Entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BookRepository extends JpaRepository<Book,Integer> {

    @Query("select b from Book b")
    List<Book> getBooks();

    @Query(value = "from Book where name = :name")
    Book findBookByName(@Param("name")String name);


}