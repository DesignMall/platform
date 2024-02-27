package ma.disignMall.Models.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Suppliers {
    @Id
    private String supplierId;
    private String name;
    private String field;
    private String location;
    private String phoneNumber;

    // Getters and setters
}
