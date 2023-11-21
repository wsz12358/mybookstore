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

    @Query("select b from Book b where b.type = :type")
    List<Book> getBooksByType(String type);

    @Modifying
    @Query(value = "delete from Book where bookId = :id")
    void deleteBookByBookId(@Param("id")Integer id);

    @Modifying
    @Query("update from Book set inventory = inventory - :num where bookId = :id")
    void UpdateInventory(@Param("num") Integer num, @Param("id") Integer id);


    @Modifying
    @Query("update from Book set name = :name," +
            "author = :author," +
            "image = :image," +
            "isbn = :isbn," +
            "inventory = :inventory where bookId = :id")
    void UpdateBook(@Param("name")String name, @Param("author")String author,
                    @Param("image")String image, @Param("isbn")String isbn,
                    @Param("inventory") Integer inventory, @Param("id") Integer id);
}