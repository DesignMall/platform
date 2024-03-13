package ma.disignMall.Models.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Provider {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long Id;

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
}

