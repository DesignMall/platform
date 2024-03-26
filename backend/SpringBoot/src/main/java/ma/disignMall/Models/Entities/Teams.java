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
@Table(name = "teams")
public class Teams {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long Id;

    private String name;

    private String category;

    @OneToMany(mappedBy = "team")
    private List<Player> players;

    public Teams(String name, String category) {
        this.name = name;
        this.category = category;
    }
}
