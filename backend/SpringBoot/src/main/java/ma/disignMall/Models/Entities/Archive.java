package ma.disignMall.Models.Entities;

import jakarta.persistence.*;
@Entity
public class Archive {
    @Id
    private String archiveId;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    // Getters and setters
}
