package ma.disignMall.Models.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Player {
    @Id
    private String playerId;
    private String playerName;
    private String playerNumber;
    private String season;

    @ManyToOne
    @JoinColumn(name = "team_id")
    private Teams team;

    // Getters and setters
}
