package ma.disignMall.Models.Entities;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Services {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long Id;
    private String description;
    private Float price;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @ManyToMany(mappedBy = "services")
    private List<Provider> providers;

    // Getters and setters
}
