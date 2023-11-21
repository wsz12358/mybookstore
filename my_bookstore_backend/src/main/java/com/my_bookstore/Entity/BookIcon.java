package com.my_bookstore.Entity;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;

@Document(collection = "bookicon")
public class BookIcon {
    @Id
    private int id;
    private String iconBase64;
    public BookIcon(int id, String iconBase64) {
        this.id = id;
        this.iconBase64 = iconBase64;
    }
    public String getIconBase64() {
        return iconBase64;
    }
    public void setIconBase64(String iconBase64) {
        this.iconBase64 = iconBase64;
    }
}
