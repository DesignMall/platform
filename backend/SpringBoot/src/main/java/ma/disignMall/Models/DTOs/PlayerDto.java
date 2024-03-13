package ma.disignMall.Models.DTOs;

import jakarta.validation.constraints.NotNull;
import lombok.Value;
import ma.disignMall.Models.Entities.Coordinates;

import java.io.Serializable;

/**
 * DTO for {@link ma.disignMall.Models.Entities.Player}
 */
@Value
public class PlayerDto implements Serializable {
    Long Id;
    String playerName;
    String playerNumber;
    Long teamId;
    String textColor;
    Coordinates nameCoordinates;
    Coordinates numberCoordinates;
    Long CustomerId;
}