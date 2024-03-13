package ma.disignMall.Models.Entities;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Teams {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long Id;
    private String name;
    private String category;

    @OneToMany(mappedBy = "team")
    private List<Player> players;

}
