package ma.disignMall.Models.Entities;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long Id;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String location;
    private String email;
    private String password;

    @OneToMany(mappedBy = "customer")
    private List<Archive> archives;

    @OneToMany(mappedBy = "customer")
    private List<Services> services;

    @OneToMany(mappedBy = "customer")
    private List<Project> projects;
}
