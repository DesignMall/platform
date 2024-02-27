package ma.disignMall.Models.DTOs;

import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link ma.disignMall.Models.Entities.Player}
 */
@Value
public class PlayerDto implements Serializable {
    String playerId;
    String playerName;
    String playerNumber;
    String season;
}