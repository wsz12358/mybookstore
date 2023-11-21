package com.my_bookstore.Repository;

import com.my_bookstore.Entity.BookType;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;

import java.util.List;

public interface BookTypeRepository extends Neo4jRepository<BookType, Long> {
    BookType findByType(String type);

    @Query("MATCH (n:BookType{type:$0}) MATCH path = (n)-[:similarity*..2]-(related:BookType) WITH COLLECT(DISTINCT n) + COLLECT(DISTINCT related) AS allTags RETURN allTags")
    List<BookType> getSimilarBookTypes(String type);
}
