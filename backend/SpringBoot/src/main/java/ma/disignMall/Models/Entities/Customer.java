package ma.disignMall.Models.Entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

import java.util.List;

@Entity
public class Customer {
    @Id
    private String customerId;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String location;
    private String email;
    private String password;

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL.ALL)
    private List<Archive> archives;

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    private List<Services> services;

    // Getters and setters
}
