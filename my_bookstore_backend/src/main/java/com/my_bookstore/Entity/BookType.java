package com.my_bookstore.Entity;

import lombok.Data;
import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;
import org.neo4j.ogm.id.UuidStrategy;
import org.neo4j.ogm.typeconversion.UuidStringConverter;

import javax.persistence.Convert;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Data
@NodeEntity(label = "BookType")
public class BookType {

    @Id
    @GeneratedValue
    private Long id;

    private String type;

    @Relationship(type = "similarity")
    public Set<BookType> bookTypes;

    public BookType(){};

    public BookType(String type)
    {
        this.type = type;
    }

    public void isSimiliarTo(BookType bookType)
    {
        if (bookTypes == null)
        {
            bookTypes = new HashSet<>();
        }
        bookTypes.add(bookType);
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
