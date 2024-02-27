package ma.disignMall.Models.Entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

import java.util.List;

@Entity
public class Teams {
    @Id
    private String teamId;
    private String name;
    private String category;

    @OneToMany(mappedBy = "team", cascade = CascadeType.ALL.ALL)
    private List<Player> players;

    // Getters and setters
}
