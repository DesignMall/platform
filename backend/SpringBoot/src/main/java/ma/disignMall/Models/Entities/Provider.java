package ma.disignMall.Models.Entities;

import jakarta.persistence.*;

import java.util.List;
@Entity
public class Provider {
    @Id
    private String providerId;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String phoneNumber;
    private String location;
    private String field;
    private Float rate;
    private Integer experience;
    private Boolean available;

    @ManyToMany
    private List<Services> services;

    // Getters and setters
}

