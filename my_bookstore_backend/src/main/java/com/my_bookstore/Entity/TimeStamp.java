package com.my_bookstore.Entity;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.util.Date;

@Data
@Getter
@Setter
@Component
@Scope("session")
public class TimeStamp {

    Date begintime;

    Date endtime;


}
