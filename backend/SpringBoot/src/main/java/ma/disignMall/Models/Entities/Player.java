package ma.disignMall.Models.Entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long Id;

    @Column(name = "player_name")
    private String playerName;

    @Column(name = "player_number")
    private String playerNumber;

    @ManyToOne
    @JoinColumn(name = "team_id")
    private Teams team;

    @Column(name = "text_color")
    private String textColor;

    @OneToOne
    @JoinColumn(name = "name_coordinates_id")
    private Coordinates nameCoordinates;

    @ManyToOne
    private Coordinates numberCoordinates;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;
}
