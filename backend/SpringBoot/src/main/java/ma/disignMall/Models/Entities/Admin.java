package ma.disignMall.Models.Entities;
import ma.disignMall.Models.Enums.State;
import jakarta.persistence.*;
import lombok.*;
import ma.disignMall.Models.Enums.State;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "admin")
public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "state")
    @Enumerated(EnumType.ORDINAL)
    private State state;
}
