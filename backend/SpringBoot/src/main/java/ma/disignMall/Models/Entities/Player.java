package ma.disignMall.Models.Entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long Id;

    @Column(name = "player_name")
    private String playerName;

    @Column(name = "player_number")
    private String playerNumber;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @JoinColumn(name = "team_id")
    private Teams team;

    @Column(name = "text_color")
    private String textColor;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "name_coordinates_id")
    private Coordinates nameCoordinates;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "number_coordinates_id")
    private Coordinates numberCoordinates;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;
}
