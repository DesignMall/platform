package ma.disignMall.Models.Entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import ma.disignMall.Models.Enums.Status;

@Data
@Entity
@Table(name = "project")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "date")
    private String date;

    @Column(name = "status")
    private Status status;

    @ManyToOne
    @JoinColumn(name = "file_id", referencedColumnName = "id")
    private Files file;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

}