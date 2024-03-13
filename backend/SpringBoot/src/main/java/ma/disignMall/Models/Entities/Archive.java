package ma.disignMall.Models.Entities;

import jakarta.persistence.*;
@Entity
public class Archive {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long Id;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;
}
