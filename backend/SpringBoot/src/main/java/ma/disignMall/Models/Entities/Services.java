package ma.disignMall.Models.Entities;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Services {
    @Id
    private String serviceId;
    private String description;
    private Float price;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @ManyToMany(mappedBy = "services")
    private List<Provider> providers;

    // Getters and setters
}
